const Foo = require('./../../stubs/foo');
const Bar = require('./../../stubs/bar');

const foo = new Foo();
const bar = new Bar();

describe('base', () => {
	describe('inheritance', () => {
		test('Child is instanceof Parent\'s class', () => {
			expect(bar instanceof foo.constructor).toBe(true);
			expect(foo instanceof bar.constructor).toBe(false);
		});
	});
});
