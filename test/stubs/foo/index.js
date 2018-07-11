const { getPrivate, getProtected, declarePrivate, declareProtected } = require('./../../../src');
const values = require('./values');

class Foo {

	method() {
		return values.pub.method;
	}

	get property() {
		return this._property;
	}

	set property(value) {
		this._property = value;
	}

	getProtectedPropertyThroughPublicMethod() {
		return getProtected(this, Foo).protectedProperty;
	}

	setProtectedPropertyThroughPublicMethod(value) {
		getProtected(this, Foo).protectedProperty = value;
	}

	getPrivatePropertyThroughPublicMethod() {
		return getPrivate(this, Foo).privateProperty;
	}

	setPrivatePropertyThroughPublicMethod(value) {
		getPrivate(this, Foo).privateProperty = value;
	}

}

Foo.prototype._property = values.pub.property;

declarePrivate(Foo, {
	privateMethod: () => {
		return values.priv.method;
	},
	_privateProperty: values.priv.property,
	get privateProperty() {
		return getPrivate(this, Foo)._privateProperty;
	},
	set privateProperty(value) {
		getPrivate(this, Foo)._privateProperty = value;
	},
	unaccessibleFooProperty: values.priv.access
});

declareProtected(Foo, {
	protectedMethod: () => {
		return values.prot.method;
	},
	_protectedProperty: values.prot.property,
	get protectedProperty() {
		return getProtected(this, Foo)._protectedProperty;
	},
	set protectedProperty(value) {
		getProtected(this, Foo)._protectedProperty = value;
	},
	protectedAccessibleFooProperty: values.prot.access
});

module.exports = Foo;
