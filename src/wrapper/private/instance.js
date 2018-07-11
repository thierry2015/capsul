const { declaredPrivateData } = require('./definition');
const extend = require('../../utils/extend');

/**
 * Private data associated to single instance.
 *
 * @type {Map<Object, {}>}
 */
const privateData = new Map();

const getPrivate = (instance, constructor) => {
	if (!privateData.has(constructor)) {
		privateData.set(constructor, new WeakMap());
	}

	const constructorPrivateData = privateData.get(constructor);

	if (!constructorPrivateData.has(instance)) {
		constructorPrivateData.set(instance, extend({}, declaredPrivateData.get(constructor) || {}, instance));
	}

	return constructorPrivateData.get(instance);
};

module.exports = {
	getPrivate
};
