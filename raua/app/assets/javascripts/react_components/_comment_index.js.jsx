/** @jsx React.DOM */
var CommentIndex = React.createClass({
  
  getInitialState: function () {
     return  JSON.parse(this.props.presenter);
  },

  render:function(){
    return(
      <div>
        <table>
          <tr>
            <th>sno&nbsp;</th>
            <th>&nbsp;name&nbsp;</th>
            <th>&nbsp;comment&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
          </tr>
          <tbody>
                {this.state.comments.map(function(comment,i){
     
                return <CommentRow key={i} data={comment} /> 
                          
                })}
          </tbody>    
        </table>
          <td><a href={'/comments/new/'}>Add</a></td>
      </div>
    )
  }
});

var CommentRow = React.createClass({
  render:function(){
    return (
        <tr key={0}>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.author}</td>
        <td>{this.props.data.text}</td>
        <td><a href={'/comments/show/'+this.props.data.id}>Show</a></td><td><a href={'/comments/edit/'+this.props.data.id}>Edit&nbsp;&nbsp;</a></td>
        <td><a href={'/comments/destroy/'+this.props.data.id}>&nbsp;&nbsp;&nbsp;Delete</a></td>
      </tr>
    )
  }
});
