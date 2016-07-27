var React = require('react');
var ReactDOM = require('react-dom');
var SentMessage =require('./SentMsg');

var SentMessageList = React.createClass({
render: function() {
    var msgNodes = this.props.allData.map(function(msg) {
       return (
         <SentMessage Msg={msg} key={msg.msgId}>
         </SentMessage>
        );
      });

       return(
      <div className="sentMessageList col-md-10 mid-section">
      <table className="table">
				<thead>
					<tr>
            <th>To</th>
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

module.exports = SentMessageList;