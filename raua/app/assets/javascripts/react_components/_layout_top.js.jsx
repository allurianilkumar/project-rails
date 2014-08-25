/*** @jsx React.DOM */
var LayoutTop = React.createClass({
  render: function() {
    return (

      <div className="top-notification bg-warning">
        <div className="times-notification" id="remove-top-notification">
          <i className="glyphicon glyphicon-remove" />
        </div>
        <strong>NOTIFICATION : </strong><p> 
        Urna dapibus nec platea arcu parturient enim lacus vel integer, dolor placerat, lorem parturient sagittis pulvinar?</p>
        <a href="#fakelink">Yes</a> / <a href="#fakelink">No</a>
      </div>
    );
  }
});