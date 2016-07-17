var asian=["Arab World "," South Asia "," Afghanistan "," Armenia "," Azerbaijan "," Bangladesh "," Bhutan "," Cambodia ",
            " China "," Georgia "," India "," Indonesia "," Iran, Islamic Rep. "," Iraq "," Israel ",
            " Japan "," Jordan "," Kazakhstan "," Korea, Dem. Rep. "," Korea, Rep. "," Kuwait ",
            " Kyrgyz Republic "," Lao PDR "," Latvia "," Lebanon "," Malaysia "," Maldives "," Mongolia ",
            " Myanmar "," Nepal "," Oman "," Pakistan "," Qatar "," Singapore "," Sri Lanka ",
            " Syrian Arab Republic "," Tajikistan "," Thailand "," Turkmenistan "," United Arab Emirates ",
            " Uzbekistan "," Vietnam "," Yemen, Rep." ];
var records=[];
require('fs').createReadStream('indicator_small.csv')
  .on('data', function(chunk) {
    to_string = chunk.toString().split('\n');
    var header = to_string[0].split(",");

    for(var i = 1; i < to_string.length; i++) {
      var row = {};
      var data = to_string[i].split(",");
      for (var j = 0 ; j < data.length ; j++) {
        row[header[j]] = data[j];
      }
      //console.log(' the value of row : \n',row);
      records.push(row);
    }
  })

  .on('end', function() {
  // console.log('Json format of csv file is : \n' ,records);
  var json_object = JSON.stringify(records);
  console.log(json_object);
    });
