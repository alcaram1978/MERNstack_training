var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");
var sinon = require('sinon');
var omdbstub = require(".././models/omdbschema");

var url = supertest("http://localhost:8080");

omdbStubfind = sinon.stub(omdbstub, 'find');
//omdbStubUpdate = sinon.stub(omdbstub, 'save');


describe('test data from the mongodb', function() {
/*    beforeEach(function(){
      omdbStubfind.withArgs({title:"Inception"}).returns({"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Crime","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy","Plot":"A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                         "Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 143 wins & 198 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Metascore":"74",
                         "imdbRating":"8.8","imdbVotes":"1,446,708","imdbID":"tt1375666","Type":"movie","Response":"True"});
    });*/

    it('should retrieve data', function(done){
      url
      .get("/omdbapi")
      .expect(200)
      .expect('Content-Type',/json/)
      console.log(res);
      .end(function(err,res){
      //expect(res.text.Title).to.be.equal("Inception");
      //expect(mStub({title:"Inception"}).Rated).to.be.equal("PG-13");
      done();
    });
});

/*describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("Hello!");
          assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/product/5/6")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          parseFloat(res.text).should.be.equal(30);
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle and send the JSON data", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          done();
        });

  });*/
});
