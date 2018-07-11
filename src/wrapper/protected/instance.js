const { declaredProtectedData } = require('./definition');
const extend = require('../../utils/extend');

/**
 * Protected data associated to single instance.
 *
 * @type {WeakMap<Object, {}>}
 */
const protectedData = new Map();

const getProtected = (instance, constructor) => {
	if (!protectedData.has(constructor)) {
		protectedData.set(constructor, new WeakMap());
	}

	const constructorProtectedData = protectedData.get(constructor);

	if (!constructorProtectedData.has(instance)) {
		const classList = [];
		const dataModel = {};

		for (const classDefinition of declaredProtectedData.keys()) {
			if (instance instanceof classDefinition) {
				classList.push(classDefinition);
			}
		}

		classList.sort((a, b) => {
			return a.prototype instanceof b ? 1 : -1;
		}).forEach((data) => {
			extend(dataModel, declaredProtectedData.get(data), instance);
		});

		constructorProtectedData.set(instance, dataModel);
	}

	return constructorProtectedData.get(instance);
};

module.exports = {
	getProtected
};
