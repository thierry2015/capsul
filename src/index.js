module.exports = {
	getPrivate: require('./wrapper/private/instance').getPrivate,
	declarePrivate: require('./wrapper/private/definition').declarePrivate,
	getProtected: require('./wrapper/protected/instance').getProtected,
	declareProtected: require('./wrapper/protected/definition').declareProtected
};
