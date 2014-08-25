   /*** @jsx React.DOM */
  var Registration = React.createClass({
  render: function() {
    return (
      <div>
        <div className="login-header text-center">
          <img src="/assets/images/logo-login.png" className="logo" alt="Logo" />
        </div>
        <div className="login-wrapper">
          <form role="form">
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="text" className="form-control no-border input-lg rounded" placeholder="Full name" autofocus="" />
              <span className="fa fa-male form-control-feedback" />
            </div>
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="text" className="form-control no-border input-lg rounded" placeholder="Choose username" />
              <span className="fa fa-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="email" className="form-control no-border input-lg rounded" placeholder="Enter email" />
              <span className="fa fa-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="password" className="form-control no-border input-lg rounded" placeholder="Enter password" />
              <span className="fa fa-lock form-control-feedback" />
            </div>
            <div className="form-group has-feedback lg left-feedback no-label">
              <input type="password" className="form-control no-border input-lg rounded" placeholder="re-enter password" />
              <span className="fa fa-unlock form-control-feedback" />
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label className="inline-popups">
                  <input type="checkbox" className="i-yellow-flat" /><a href="#text-popup" data-effect="mfp-zoom-in">Terms and conditions</a>
                </label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning btn-lg btn-perspective btn-block">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
         
    );
  }
});