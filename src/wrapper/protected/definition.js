/**
 * Protected data associated to class definition.
 *
 * @type {Map<Object, {}>}
 */
const declaredProtectedData = new Map();

const declareProtected = (...args) => {
	declaredProtectedData.set(...args);
};

module.exports = {
	declaredProtectedData,
	declareProtected
};
