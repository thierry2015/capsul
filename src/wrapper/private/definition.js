/**
 * Private data associated to class definition.
 *
 * @type {Map<Object, {}>}
 */
const declaredPrivateData = new Map();

const declarePrivate = (...args) => {
	declaredPrivateData.set(...args);
};

module.exports = {
	declaredPrivateData,
	declarePrivate
};
