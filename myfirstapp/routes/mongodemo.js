var express = require('express');
var mongoose = require("mongoose");
var adata =[];
var fdata = {};
var User = require(".././models/userschema");
var Router = express.Router();


Router.get('/', function (req, res) {

/*    User.find({age:"34"}, function(err, data){
      fdata = data;
    });
    adata.push(fdata);*/
    User.find({name:"Ramesh"}, function(err, data){
      fdata = data;

  adata.push(fdata);
  });

  res.send(adata);
});

module.exports = Router;
