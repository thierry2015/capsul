const { getPrivate, getProtected, declarePrivate, declareProtected } = require('./../../../src');
const Foo = require('./../foo');
const values = require('./values');

class Bar extends Foo {

	anotherMethod() {
		return values.pub.method;
	}

	getChildPrivatePropertyThroughPublicMethod() {
		return getPrivate(this, Bar).privateProperty;
	}

	setChildPrivatePropertyThroughPublicMethod(value) {
		getPrivate(this, Bar).privateProperty = value;
	}

	accessPrivatePropertyOfParent() {
		return getPrivate(this, Bar).unaccessibleFooProperty;
	}

	accessProtectedPropertyOfParent() {
		return getProtected(this, Bar).protectedAccessibleFooProperty;
	}

}

Bar.prototype._property = values.pub.property;

declarePrivate(Bar, {
	privateMethod: () => {
		return values.priv.method;
	},
	_privateProperty: values.priv.property,
	get privateProperty() {
		return getPrivate(this, Bar)._privateProperty;
	},
	set privateProperty(value) {
		getPrivate(this, Bar)._privateProperty = value;
	},
	unaccessibleBarProperty: values.priv.access
});

declareProtected(Bar, {
	protectedAccessibleBarProperty: values.prot.property
});

module.exports = Bar;
