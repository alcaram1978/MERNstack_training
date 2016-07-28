var asian=["Arab World","South Asia","Afghanistan","Armenia","Azerbaijan","Bangladesh","Bhutan","Cambodia",
            "China","Georgia","India","Indonesia","Iran","Islamic Rep.","Iraq","Israel",
            "Japan","Jordan","Kazakhstan","Korea Dem. Rep.","Korea Rep.","Kuwait",
            "Kyrgyz Republic","Lao PDR","Latvia","Lebanon","Malaysia","Maldives","Mongolia",
            "Myanmar","Nepal","Oman","Pakistan","Qatar","Singapore","Sri Lanka",
            "Syrian Arab Republic","Tajikistan","Thailand","Turkmenistan","United Arab Emirates",
            "Uzbekistan","Vietnam","Yemen Rep."];
var i;
var to_string=[];
var inner = [];
var count = 0;
var headers =[];
var data1 =[];
var data2 = [];
var records1=[];
var records2 =[];

var key1= '\"Life expectancy at birth  female (years)\"';
var key2 ='\"Life expectancy at birth  male (years)\"';
var key3 = '\"Life expectancy at birth  total (years)\"';
var fs = require('fs'),
   readline = require('readline'),
   stream = require('stream'),
   util = require('util');


var instream = fs.createReadStream('indicator_sample.csv');
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

  rl.on('line', function(line) {
    console.log(line);

        to_string = line.toString().split('\n');
      //  var arr = String(to_string).match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        var col = to_string[0].split(',');
        //console.log(' value of columns : \n',col[0]);
        if (col[0] === 'CountryName')
        {
           headers = col;
        //  console.log('the value of headers : \n',headers);
          console.log('length of headers : \n',headers.length);

        }
        else {
          for (var c=0;c<asian.length;c++)
          {
            //console.log('value of col[0] \n',col[0]);
            //console.log('value of asian \n',asian[c]);
            //console.log('value of col[2] \n',col[2]);
            var rows1 = {};
            var rows2 = {};
            if ((col[0]  == asian[c]) && ((col[2] == key1) ||
            (col[2] == key2)))
            {
            // console.log('entered data1 loop');
             data1 = col;
             //console.log('the value of data1 : \n',data1);
             //console.log('length of data1 : \n',data1.length);
             for (var j=0; j<headers.length; j++) {
               rows1[headers[j]] = data1[j];
             }
             records1.push(rows1);
             console.log('value of records1 : \n',records1);
            }
           else if ((col[0]  === asian[c]) && (col[2] === key3))
           {
             data2 = col;
            // console.log('entered data2 loop');
             for (var k=0;k<headers.length;k++){
               rows2[headers[k]] = data2[k];
             }
            records2.push(rows2);
            console.log('value of records2 : \n',records2);
            //console.log('the value of data2 : \n',data2);
            //console.log('length of data2 : \n',data2.length);
           }
          }
        }

  });

  rl.on('close', function() {
    console.log(' the value of first json file - record1 : \n',JSON.stringify(records1));
    console.log(' the value of second json file - record2 : \n',JSON.stringify(records2));
      console.log('Have a great day!');
      process.exit(0);
      });

