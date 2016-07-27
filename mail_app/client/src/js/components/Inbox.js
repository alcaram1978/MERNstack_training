var React= require('react');
var ReactDom = require('react-dom');
var InboxMessageList = require('./InboxMsgLst');

var Inbox = React.createClass({

  getInitialState: function(){
       return{Allmsg:[]}
    },
    loadDataFromFile:function(){
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
   this.loadDataFromFile();
 },
  render: function() {
    return (
     <div>
          <InboxMessageList allmsg = {this.state.Allmsg} />
    </div>


    );
  }
});

module.exports = Inbox;
