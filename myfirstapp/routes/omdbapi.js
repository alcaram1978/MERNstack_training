var express = require('express');
var router = express.Router();
var requestify = require('requestify');
var omdb = require(".././models/omdbschema");
var urlbuild,omdb_new,fdata,data,omdb_upd;
var pdata={};
var omdb_i =[];
var omdb_arr =[];


/*router.post('/', function(req,res,next){
  // build the url based on the title
  var t = req.body.Title;
  console.log(t);
  var url="http://www.omdbapi.com/?";
  urlbuild=url+"t="+t;

console.log(urlbuild);

requestify.get(urlbuild).then(function(response) {
  // Get the response body
  //response.json()
  omdb_i = response.getBody();
  omdb_new = new omdb(omdb_i);
  console.log(omdb_i);

  /*omdb_new.Title = omdb_i.Title;
  omdb_new.Year = omdb_i.Year;
  omdb_new.Rated = omdb_i.Rated;
  omdb_new.Released = omdb_i.Released;
  omdb_new.Runtime = omdb_i.Runtime;
  omdb_new.Genre = omdb_i.Genre;
  omdb_new.Director = omdb_i.Director;
  omdb_new.Writer = omdb_i.Writer;
  omdb_new.Actors = omdb_i.Actors;
  omdb_new.Plot = omdb_i.Plot;
  omdb_new.Language = omdb_i.Language;
  omdb_new.Country = omdb_i.Country;
  omdb_new.Awards = omdb_i.Awards;
  omdb_new.Poster = omdb_i.Poster;
  omdb_new.Metascore = omdb_i.Metascore;
  omdb_new.imdbRating = omdb_i.imdbRating;
  omdb_new.imdbVotes = omdb_i.imdbVotes;
  omdb_new.imdbID = omdb_i.imdbID;
  omdb_new.Type = omdb_i.Type;
  omdb_new.Response = omdb_i.Response;


  omdb_new.save(function (err, omdb_new) {
    if (err) return console.error(err);
    console.log('DB update successful');
  });

});
//    omdb_arr.push(omdb);
  res.send('POST successful');
  });



router.put('/', function(req, res, next) {
  var title= req.body.Title;

  if (omdb.findOne({Title:title}, function(err,data){

    // omdb_upd = new omdb();
    console.log(title);
    pdata=data;
    console.log(pdata.Title);
    var query = pdata.Title;

    if (query === "The Matrix"){
        omdb.update({Title:query},{Title:"Matrix Reloaded"},function (err, omdb_upd) {
        if (err) return console.error(err);
        //console.log(omdb_upd);
        console.log('Collection update successful');

      });
    }

  }));


  res.send('PUT successful');
});


router.delete('/', function(req, res, next){
  var title=req.body.Title;
  console.log(title);
  omdb.remove({Title:title}, function (err){
    if (err) return console.error(err);
    console.log(' Document removed');
  });
  res.send('DELETE request processed successful');
});
*/


/* GET users listing. */
router.get('/', function(req, res,next) {
    // POST Request in JSON:

  if (omdb.find(function(err, data){
    if (err) return console.error(err);
    fdata = data;
    console.log(fdata);
    res.send(fdata);
}));

});

module.exports = router;
