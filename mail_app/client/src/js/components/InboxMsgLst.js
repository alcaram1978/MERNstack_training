var React = require('react');
var ReactDOM = require('react-dom');
var InboxMessage =require('./InboxMsg');

var InboxMessageList = React.createClass({
render: function() {
    var msgNodes = this.props.allmsg.map(function(msg) {
       return (
         <InboxMessage Msg={msg} key={msg.msgId}>
         </InboxMessage>
        );
      });

       return(
      <div className="inboxMessageList col-md-10 mid-section">
      <table className="table">
				<thead>
					<tr>
            <th>From</th>
  					<th>Subject</th>
  					<th>Date Time</th>
            <th>Action</th>
          </tr>
				</thead>
          {msgNodes}
        </table>
      </div>
    );

  }


});

module.exports = InboxMessageList;
