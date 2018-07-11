const Foo = require('./../../stubs/foo');
const Bar = require('./../../stubs/bar');

const foo = new Foo();
const bar = new Bar();

const values = {
	foo: require('./../../stubs/foo/values'),
	bar: require('./../../stubs/bar/values')
};

const external = 'external value';

describe('private', () => {
	describe('concrete', () => {
		test('Private property are not accessible', () => {
			expect(typeof foo.privateProperty).toBe(typeof undefined);
			expect(typeof bar.privateProperty).toBe(typeof undefined);
		});

		test('Private method are not accessible', () => {
			expect(typeof foo.privateMethod).toBe(typeof undefined);
			expect(typeof bar.privateMethod).toBe(typeof undefined);
		});

		test('Private methods are accessible through isolated class instances', () => {
			expect(foo.getPrivatePropertyThroughPublicMethod()).toBe(values.foo.priv.property);
			expect(bar.getPrivatePropertyThroughPublicMethod()).toBe(values.foo.priv.property);
			expect(bar.getChildPrivatePropertyThroughPublicMethod()).toBe(values.bar.priv.property);
		});

		test('Private mutators are working as if it was bind to the object', () => {
			expect(foo.getPrivatePropertyThroughPublicMethod()).toBe(values.foo.priv.property);
			foo.setPrivatePropertyThroughPublicMethod(external);
			expect(foo.getPrivatePropertyThroughPublicMethod()).toBe(external);
			foo.setPrivatePropertyThroughPublicMethod(values.foo.priv.property);
		});
	});
});
