/*** @jsx React.DOM */

var Login = React.createClass({
  render: function() {
    return (
      <div>
        <div className="login-header text-center">
          <img src="assets/images/logo-login.png" className="logo" alt="Logo" />
        </div>
        <div className="login-wrapper">
          <div className="alert alert-warning alert-bold-border fade in alert-dismissable">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <strong>Warning!</strong> 
            <a href="#fakelink" className="alert-link">not looking too good</a>
          </div>
          <form role="form" action="index.html">
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="text" className="form-control no-border input-lg rounded" placeholder="Enter username" autofocus="" />
              <span className="fa fa-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="password" className="form-control no-border input-lg rounded" placeholder="Enter password" />
              <span className="fa fa-unlock-alt form-control-feedback" />
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" className="i-yellow-flat" /> 
                </label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning btn-lg btn-perspective btn-block">LOGIN</button>
            </div>
          </form>
          <p className="text-center"><strong><a href="forgot-password.html">Forgot your password?</a></strong></p>
          <p className="text-center">or</p>
          <p className="text-center"><strong><a href="register.html">Create new account</a></strong></p>
        </div>
      </div>
    );
  }
});