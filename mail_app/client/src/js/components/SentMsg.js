var React = require('react');
var ReactDOM = require('react-dom');
var SentMessageView = require('./SentMsgVw');
var Link = require('react-router').Link;

var SentMessage = React.createClass({
  onAdd:function(){
    	$.ajax({
        url: "http://localhost:8080/addmsgtodb",
        dataType: 'json',
        type: 'POST',
        data: this.props.Msg,
        success: function(data) {
          console.log("data inserted in db");
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
  render: function () {
    return (
				<tbody>
					<tr className="active">
						<td><Link to={{ pathname: 'SentMessage/', query: { id: this.props.Msg.msgId } }}>{this.props.Msg.msgTo}</Link></td>
						<td><Link to={{ pathname: 'SentMessage/', query: { id: this.props.Msg.msgId } }}>{this.props.Msg.msgSubject}</Link></td>
						<td><Link to={{ pathname: 'SentMessage/', query: { id: this.props.Msg.msgId } }}>{this.props.Msg.msgReceivedOn}</Link></td>
						<td><a href="#" onClick={this.onAdd}>Add</a></td>
						<td>
			              <button type="button" 
			                className="btn btn-info btn-lg" 
			                data-toggle="modal" 
			                data-target={"#myModal"+this.props.Msg.msgId}>Open Msg </button>
			              </td>
			              <td>
			                <div className="modal fade" id={"myModal"+this.props.Msg.msgId} role="dialog">
			                  <div className="modal-dialog">
			                    <div className="modal-content">
			                      <div className="modal-header">
			                        <button type="button" className="close" data-dismiss="modal">&times;</button>
			                        <h4 className="modal-title">Modal Header</h4>
			                      </div>
			                      <div className="modal-body">
			                        <p>{this.props.Msg.msgBody}</p>
			                      </div>
			                      <div className="modal-footer">
			                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			            </td>


					</tr>
				</tbody>

    );
  }
});

module.exports = SentMessage;
