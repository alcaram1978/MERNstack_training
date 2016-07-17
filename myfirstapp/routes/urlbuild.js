var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var urlbuild;
var omdb ={};
var omdb_arr =[];

router.post('/', function(req,res,next){
  // build the url based on the title
  var t = req.body.title;
  var y = req.body.year;
  var p = req.body.plot;
  var resp = req.body.r;
  var url="http://www.omdbapi.com/?";
  urlbuild=url+"t="+t+"&y="+y+"&plot="+p+"&r="+resp;
console.log(urlbuild);

requestify.get(urlbuild).then(function(response) {
  // Get the response body
  //response.json()
  omdb = response.getBody();
    omdb_arr.push(omdb);
  res.send('POST successful');
  });

});

router.put('/', function(req, res, next) {
  var t = req.body.title;
  var y = req.body.year;
  var p = req.body.plot;
  var resp = req.body.r;
  var url="http://www.omdbapi.com/?";
  urlbuild=url+"t="+t+"&y="+y+"&plot="+p+"&r="+resp;
console.log(urlbuild);

requestify.get(urlbuild).then(function(response){
  // Get the response body
  //response.json()
  omdb = response.getBody();
  omdb_arr.push(omdb);
  res.send('PUT successful');
  });

});

router.delete('/', function(req, res, next){
  var title=req.body.data;
  delete omdb[title];
  res.send('Got a DELETE request at /');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    // POST Request in JSON:
  res.send(omdb_arr);
});

module.exports = router;
