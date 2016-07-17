var express = require('express');
var router = express.Router();

/* GET home page. */

var arr ={};
var arr_new=[];
// POST method route
router.post('/', function (req, res) {
  var fname = req.body.firstname;
      res.send('POST request to the homepage');
      var lname = req.body.lastname;
      arr = {firstname:fname,lastname:lname,"Account":"LBG","work":"onsite"};
      arr_new.push(arr);
      console.log(arr_new);

});

router.put('/', function (req, res) {
  var fname = req.body.firstname;
  var lname = req.body.lastname;
      arr = {firstname:fname,lastname:lname,"Account":"LBG","work":"onsite"};
      res.send('PUT request to the homepage');
      arr_new.push(arr);
      console.log(arr_new);
});

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json(arr_new);
  //res.render('GET request to the homepage');
});
module.exports = router;
