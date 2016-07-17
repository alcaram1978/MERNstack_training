  // Server-side JavaScript
  var calculator = require('./calculator');
  var fs = require('fs');
  var http = require('http');
  var url = require('url') ;

  http.createServer(function (req, res) {
    var queryObject = url.parse(req.url,true).query;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE "html">');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Calculator using node.js</title>');
    res.write('</head>');
    res.write('<body>');
    console.log(queryObject);
    //res.writeHead(200);
    var mode = queryObject["mode"];
    var val1 = queryObject["val1"];
    var val2 = queryObject["val2"];
    console.log(mode);
    console.log(val1);
    console.log(val2);
    switch (mode){
      case 'sum':
        var result = calculator.sum(parseFloat(val1),parseFloat(val2));
        res.write(result.toString());
        break;
      case 'sub':
        var result = calculator.diff(parseFloat(val1), parseFloat(val2));
        res.write(result.toString());
        break;
      case 'multi':
        var result = calculator.multi(parseFloat(val1), parseFloat(val2));
        res.write(result.toString());
        break;
      case 'div':
        var result = calculator.division(parseFloat(val1), parseFloat(val2));
        res.write(result.toString());
        break;
    }
      res.write('</body>');
      res.write('</html>');
      res.end();

      //res.end('Feel free to add query parameters to the end of the url');
  }).listen(8080);
