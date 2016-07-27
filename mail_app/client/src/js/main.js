var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var MailHeader = require('./components/MailHdr');
var MailLabels = require('./components/MailLbls');
var Inbox = require('./components/Inbox');
var Sent = require('./components/Sent');
var InboxMessageList = require('./components/InboxMsgLst');
var InboxMessage = require('./components/InboxMsg');
var InboxMessageView = require('./components/InboxMsgVw');
var SentMessageView = require('./components/SentMsgVw');
var SentMessage = require('./components/SentMsg');
var SentMessageList = require('./components/SentMsgLst');

var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent">
      <MailHeader/>
      <MailLabels/>
      <br/><br/>
      {this.props.children}
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
  <Route path="/" component={MainComponent} >
    <IndexRoute component={Inbox}/>
     <Route path = "Inbox" component={Inbox}/>
       <Route path="InboxMessageList" component={InboxMessageView}/>
       <Route path="InboxMessage/:id" component={InboxMessageView}/>
 
     <Route path = "Sent" component={Sent}/>
      <Route path="SentMessageList" component={SentMessageView}/>
       <Route path="SentMessage/:id" component={SentMessageView}/>
  </Route>
  </Router>,
  document.getElementById('app')
);
