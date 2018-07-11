# Capsul

Object-Oriented encapsulation concept added to JavaScript with ES5 vanilla JS features.

## Under the hood

Capsul uses Map and WeakMap ES5 classes to store private and protected elements of each instances and class.

All protected and private members are store individually based on the constructor and the instance. Therefore, there is no real encapsulation, but there is no accidental mutation or access directly from the instance.

```javascript
// before
class Foo {

	constructor() {
		this._privateProperty = 'private value';
	}

}

const foo = new Foo();
console.log(foo._privateProperty); // will work...

// after
const capsul = require('capsul');
class Bar {
	
	getPrivateProperty() {
		return capsul.getPrivate(this, Bar).privateProperty;
	}

}

capsul.definePrivate(Bar, {
	privateProperty: 'private value'
});

const bar = new Bar();

console.log(bar.privateProperty); // undefined
console.log(bar.getPrivateProperty()); // 'private value'
console.log(capsul.getPrivate(bar, Bar).privateProperty); // will work, but you definitively want it to...
```

## available methods

### getPrivate(instance, constructor)

Get private members of an instance for a given class. It will not propagate through children or parents classes

### definePrivate(constructor, members)

Define default private members for a given constructor.

### getProtected(instance, constructor)

Get protected members of an instance for a given class. It will propagate through children classes, but not on parents classes

### defineProtected(constructor, members)

Define default protected members for a given constructor. It will be used for children constructor as well, ordered from most abstract to most concrete classes.