module.exports = (target, obj, instance) => {
	Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, get, set, enumerable }]) => {
		const property = {
			configurable: false,
			enumerable: enumerable
		};

		if ((!get || !set) && typeof value !== 'function') {
			property.writable = true;
		}

		if (typeof value !== 'undefined') {
			property.value = typeof value !== 'function' ? value : function(...args) {
				return value.bind(instance)(...args);
			};
		} else {
			if (get) {
				property.get = () => {
					return get.bind(instance)();
				};
			}
			if (set) {
				property.set = (v) => {
					set.bind(instance)(v);
				};
			}
		}
		Object.defineProperty(target, key, property);
	});

	return target;
};
