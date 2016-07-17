var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var recreate ={};
var unique_occupation =[];
var programmer=[];
var age_rows =[];
var occupation=[];
var key ='occupation';
var key2='age';
// to print the rows related to'programmer'  and get the age arrray
for (var i=0;i<myObj.length;i++)
{
  if (myObj[i][key] == "Programmer")
  {
    programmer.push(myObj[i]);
  }
  age_rows.push(myObj[i][key2]);
  occupation.push(myObj[i][key]);
}
// remove the duplicate occupation
for(var i in occupation){
    if(unique_occupation.indexOf(occupation[i]) === -1){
        unique_occupation.push(occupation[i]);
    }

}

// to sort the age array

for (var j = 1; j < age_rows.length; j++)
{
    if (parseInt(age_rows[j]) < parseInt(age_rows[j-1]))
     {
        var temp = age_rows[j - 1];
        age_rows[j - 1] = age_rows[j];
        age_rows[j] = temp;
        j=0;

    }
}

for (var n=0;n<unique_occupation.length;n++)
{
  var newobj =[];
  for (var m=0;m<myObj.length;m++)
  {
     if ( unique_occupation[n] === myObj[m]['occupation'])
     {
        var myNewObj = {};
        myNewObj.name = myObj[m]['name'];
        myNewObj.age = myObj[m]['age'];
        newobj.push(myNewObj);
     }
   }
   recreate[unique_occupation[n]] = newobj;
}

console.log(' the occupation values are  : \n',occupation);
console.log(' the rows related to programmer are : \n', programmer);
console.log(' the sorted age rows are : \n',age_rows);
console.log(' unique occupation in the occupation list : \n', unique_occupation);
console.log(' the newly recreated array is : \n', recreate);
