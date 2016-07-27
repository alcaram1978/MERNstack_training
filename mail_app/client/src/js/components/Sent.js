var React= require('react');
var ReactDom = require('react-dom');
var SentMessageList = require('./SentMsgLst');

var Sent = React.createClass({

  getInitialState: function(){
       return{Allmsg:[]}
    },
    loadData:function(){
      $.ajax({
    url:"http://localhost:8080/jsondata/emaildata.json",
    type:'GET',
    datatype:"JSON",
    success: function(data)
    {
      console.log(data);
      this.setState({Allmsg:data});

    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
    },
    componentWillMount: function(){
   this.loadData();
 },
  render: function() {
    return (
     <div>
          <SentMessageList allData = {this.state.Allmsg} />
    </div>


    );
  }
});

module.exports = Sent;

