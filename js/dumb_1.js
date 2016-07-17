//fs=require('fs');
//fs.readline('json.txt');
var dumb = function (){
  var i=0;
  while(i<10000000) {
    //console.log(' \n', i);
    ++i;
  }
}
setImmediate(dumb);
console.log('finished');
