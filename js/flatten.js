var myobj = [5, [22], [[14]], [[4]],[5,6]];

var result=[];



for (var i=0;i < myobj.length;i++)
{
  if (myobj[i].length == undefined)
  {
    result.push(myobj[i]);
  }
  else if  ((myobj[i].length == 1) && (Array.isArray(myobj[i])))
  {
    result.push(myobj[i][0][0]);
  }
  else if (myobj[i].length > 1)
  {
    for (var j =0;j <myobj[i].length;j++ )
    {
      result.push(myobj[i][j]);
    }
  }
}

console.log(result);
