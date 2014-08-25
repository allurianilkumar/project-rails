/** @jsx React.DOM */
var CommentShow = React.createClass({
  
  getInitialState: function () {
    return  JSON.parse(this.props.presenter);
  },
  
  render:function(){
    return(
      <div>
        <table>
          <tr>
            <th>sno</th>
            <th>name</th>
            <th>comment</th>
          </tr>
        <tbody>
          <tr>
            <td>{this.state.comments.id}</td>
            <td>{this.state.comments.author}</td>
            <td>{this.state.comments.text}</td>
          </tr>
          </tbody>    
        </table>
      </div>
    )
  }      
});
