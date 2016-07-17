const readline = require('readline');
var fibonoc=[0,1];
  var number=90;
  var i=1;
  console.log(fibonoc[0]);
  console.log(fibonoc[1]);
do
  {
    var temp = fibonoc[i] + fibonoc[i-1];
    console.log(temp);
    if (temp < number)
    {
    fibonoc.push(temp);
    i=i+1;
    }
    else {
      {
        break;
      }
    }
  //  console.log(i);
}while (fibonoc[i] < number);
  console.log(fibonoc);

  // find the fibonocci series until that number
