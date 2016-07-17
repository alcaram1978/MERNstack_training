var calculator=require('./calculator');

var x=9;
var y= 7;

/*var s= calculator.sum(x,y);
var d=calculator.diff(x,y);
var m = calculator.multi(x,y);
var div =calculator.division(x,y);*/

console.log('sum of x and y are  : \n',calculator.sum(x,y));
console.log('diff of x and y are  : \n',calculator.diff(x,y));
console.log('product of x and y are  : \n',calculator.multi(x,y));
console.log('division of x and y are  : \n',calculator.division(x,y));
