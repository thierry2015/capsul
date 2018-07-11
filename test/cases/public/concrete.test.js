const Foo = require('./../../stubs/foo');
const Bar = require('./../../stubs/bar');

const foo = new Foo();
const bar = new Bar();

const values = {
	foo: require('./../../stubs/foo/values'),
	bar: require('./../../stubs/bar/values')
};

const modified = ' modified';

describe('public', () => {
	describe('concrete', () => {
		test('Public property should be accessible', () => {
			expect(foo.property).toBe(values.foo.pub.property);
			foo.property += modified;
			expect(foo.property).toBe(`${values.foo.pub.property}${modified}`);
			foo.property = foo.property.substr(0, foo.property.length - modified.length);
			expect(foo.property).toBe(values.foo.pub.property);

			expect(bar.property).toBe(values.bar.pub.property);
			bar.property += modified;
			expect(bar.property).toBe(`${values.bar.pub.property}${modified}`);
			bar.property = bar.property.substr(0, bar.property.length - modified.length);
			expect(bar.property).toBe(values.bar.pub.property);
		});

		test('Public methods should be accessible', () => {
			expect(typeof foo.method).toBe('function');
			expect(foo.method()).toBe(values.foo.pub.method);

			expect(typeof bar.method).toBe('function');
			expect(bar.method()).toBe(values.foo.pub.method);
		});
	});
});
