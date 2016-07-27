var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var inboxschema = require(".././models/inboxschema");



router.post('/', function (req, res) {
console.log(req.body);
		var inboxmsg = new inboxschema(req.body);

		   inboxmsg.save(function(err){
		      res.send("data inserted in db");
		      console.log("console log : data inserted in db");
			});
 
	});


module.exports = router;
