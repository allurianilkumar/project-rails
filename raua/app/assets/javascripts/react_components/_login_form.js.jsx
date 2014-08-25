/** @jsx React.DOM */
var LoginForm = React.createClass({
  render: function() {
    return (
      <div >
        <div className="login-header text-center">
          <img src="assets/images/sentir-logo.png" className="logo" alt="Logo" />
        </div>
        <div className="login-wrapper">
          <div className="alert alert-bold-border alert-warning fade in alert-dismissable">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            Enter your email address to recover your password.
          </div>
          <form role="form">
            <div className="form-group">
            <input type="email" className="form-control input-lg rounded" placeholder="Enter email" autofocus="" />
              <span className="fa fa-envelope form-control-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning btn-lg btn-perspective btn-block">RESET PASSWORD</button>
            </div>
          </form>
          <p className="text-center"><strong><a href="login.html">Back to login</a></strong></p>
        </div>
      </div>
    );
  }
});