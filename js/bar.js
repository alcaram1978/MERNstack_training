var foo = require('./foo');
var foo1 = require('./foo1');
foo();
var foo2= foo1.foo;
console.log(foo2);
var foo3 = foo1.cake();
