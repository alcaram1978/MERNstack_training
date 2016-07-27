var React= require('react');
var ReactDom = require('react-dom');
var MovieBox = require('./MovieBox');

var addMovies = React.createClass({
  render: function() {
    return (
      <div className = "addMovies">
      <div className = "container-fluid">
        <h1> Add Movies </h1>
        <MovieBox />
    </div>
    </div>

    );
  }
});

module.exports = addMovies;
