const Foo = require('./../../stubs/foo');
const Bar = require('./../../stubs/bar');

const foo = new Foo();
const bar = new Bar();

const values = {
	foo: require('./../../stubs/foo/values'),
	bar: require('./../../stubs/bar/values')
};

const external = 'external value';

describe('protected', () => {
	describe('concrete', () => {
		test('Protected property are not accessible', () => {
			expect(typeof foo.protectedProperty).toBe(typeof undefined);
			expect(typeof bar.protectedProperty).toBe(typeof undefined);
		});

		test('Protected method are not accessible', () => {
			expect(typeof foo.protectedMethod).toBe(typeof undefined);
			expect(typeof bar.protectedMethod).toBe(typeof undefined);
		});

		test('Protected methods are accessible through isolated class instances', () => {
			expect(foo.getProtectedPropertyThroughPublicMethod()).toBe(values.foo.prot.property);
			expect(bar.getProtectedPropertyThroughPublicMethod()).toBe(values.foo.prot.property);
			expect(bar.accessProtectedPropertyOfParent()).toBe(values.foo.prot.access);
		});

		test('Protected mutators are working as if it was bind to the object', () => {
			expect(foo.getProtectedPropertyThroughPublicMethod()).toBe(values.foo.prot.property);
			foo.setProtectedPropertyThroughPublicMethod(external);
			expect(foo.getProtectedPropertyThroughPublicMethod()).toBe(external);
			foo.setProtectedPropertyThroughPublicMethod(values.foo.prot.property);
		});
	});
});
