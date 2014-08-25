  /** @jsx React.DOM */
  var Navigation = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <div className="top-navbar info-color">
          <div className="top-navbar-inner">
            <div className="logo-brand info-color">
              <a href="#fakelink"><img src="assets/images/sentir-logo-primary.png" alt="Logo" /></a>
            </div>
            <div className="top-nav-content">
              <div className="btn-collapse-sidebar-left">
                <i className="fa fa-bars" />
              </div>
              <div className="btn-collapse-sidebar-right">
                <i className="fa fa-bullhorn" />
              </div>
              <div className="btn-collapse-nav" data-toggle="collapse" data-target="#main-fixed-nav">
                <i className="fa fa-plus icon-plus" />
              </div>
              <ul className="nav-user navbar-right">
                <li className="dropdown">
                  <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="assets/images/aneel.jpg" width="10px" className="avatar img-circle" alt="Avatar" />
                    Hi, <strong>Aneel kumar</strong>
                  </a>
                  <ul className="dropdown-menu square primary margin-list-rounded with-triangle">
                    <li><a href="#fakelink">Sub menu</a></li>
                    <li><a href="#fakelink">Sub menu</a></li>
                    <li><a href="#fakelink">Sub menu</a></li>
                    <li className="divider" />
                    <li><a href="#fakelink">Separated sub menu</a></li>
                  </ul>
                </li>
              </ul>
              <div className="collapse navbar-collapse" id="main-fixed-nav">
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
                <ul className="nav navbar-nav navbar-left">
                  <li className="dropdown">
                    <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="badge badge-danger icon-count">7</span>
                      
                      <i className="fa fa-bell" />
                    </a>
                    <ul className="dropdown-menu square with-triangle">
                      <li>
                        <div className="nav-dropdown-heading">
                          Notifications
                        </div>
                        <div className="nav-dropdown-content scroll-nav-dropdown">
                          <ul>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Thomas White</strong> posted on your profile page
                                <span className="small-caps">17 seconds ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Doina Slaivici</strong> uploaded photo
                                <span className="small-caps">10 minutes ago</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Harry Nichols</strong> commented on your post
                                <span className="small-caps">40 minutes ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Mihaela Cihac</strong> send you a message
                                <span className="small-caps">2 hours ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Harold Chavez</strong> change his avatar
                                <span className="small-caps">Yesterday</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Elizabeth Owens</strong> posted on your profile page
                                <span className="small-caps">Yesterday</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Frank Oliver</strong> commented on your post
                                <span className="small-caps">A week ago</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Mya Weastell</strong> send you a message
                                <span className="small-caps">April 15, 2014</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                <strong>Carl Rodriguez</strong> joined your weekend party
                                <span className="small-caps">April 01, 2014</span>
                              </a></li>
                          </ul>
                        </div>
                        <button className="btn btn-primary btn-square btn-block">See all notifications</button>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="badge badge-warning icon-count">3</span>
                      <i className="fa fa-tasks" />
                    </a>
                    <ul className="dropdown-menu square margin-list-rounded with-triangle">
                      <li>
                        <div className="nav-dropdown-heading">
                          Tasks
                        </div>
                        <div className="nav-dropdown-content scroll-nav-dropdown">
                          <ul>
                            <li className="unread"><a href="#fakelink">
                                <i className="fa fa-check-circle-o absolute-left-content icon-task completed" />
                                Creating documentation
                                <span className="small-caps">Completed : Yesterday</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <i className="fa fa-clock-o absolute-left-content icon-task progress" />
                                Eating sands
                                <span className="small-caps">Deadline : Tomorrow</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <i className="fa fa-clock-o absolute-left-content icon-task progress" />
                                Sending payment
                                <span className="small-caps">Deadline : Next week</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <i className="fa fa-exclamation-circle absolute-left-content icon-task uncompleted" />
                                Uploading new version
                                <span className="small-caps">Deadline: 2 seconds ago</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <i className="fa fa-exclamation-circle absolute-left-content icon-task uncompleted" />
                                Drinking coffee
                                <span className="small-caps">Deadline : 2 hours ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <i className="fa fa-check-circle-o absolute-left-content icon-task completed" />
                                Walking to nowhere
                                <span className="small-caps">Completed : over a year ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <i className="fa fa-check-circle-o absolute-left-content icon-task completed" />
                                Sleeping under bridge
                                <span className="small-caps">Completed : Dec 31, 2013</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <i className="fa fa-check-circle-o absolute-left-content icon-task completed" />
                                Buying some cigarettes
                                <span className="small-caps">Completed : 2 days ago</span>
                              </a></li>
                          </ul>
                        </div>
                        <button className="btn btn-primary btn-square btn-block">See all notifications</button>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="badge badge-success icon-count">9</span>
                      <i className="fa fa-envelope" />
                    </a>
                    <ul className="dropdown-menu square margin-list-rounded with-triangle">
                      <li>
                        <div className="nav-dropdown-heading">
                          Messages
                        </div>
                        <div className="nav-dropdown-content scroll-nav-dropdown">
                          <ul>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                <span className="small-caps">17 seconds ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
                                <span className="small-caps">10 minutes ago</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                I think so
                                <span className="small-caps">40 minutes ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Yes, Ill be waiting
                                <span className="small-caps">2 hours ago</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Thank you!
                                <span className="small-caps">Yesterday</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                No problem! I will never remember that
                                <span className="small-caps">Yesterday</span>
                              </a></li>
                            <li className="unread"><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Tak gepuk ndasmu sisan lho dab!
                                <span className="small-caps">A week ago</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Sorry bro, aku or atau sing jenenge ngono kui
                                <span className="small-caps">April 15, 2014</span>
                              </a></li>
                            <li><a href="#fakelink">
                                <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                                Will you send me an invitation for your weeding party?
                                <span className="small-caps">April 01, 2014</span>
                              </a></li>
                          </ul>
                        </div>
                        <button className="btn btn-primary btn-square btn-block">See all message</button>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="badge badge-info icon-count">2</span>
                      <i className="fa fa-users" />
                    </a>
                    <ul className="dropdown-menu square margin-list-rounded with-triangle">
                      <li>
                        <div className="nav-dropdown-heading">
                          Friend requests
                        </div>
                        <div className="nav-dropdown-content static-list scroll-nav-dropdown">
                          <ul>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Craig Dixon</strong>
                                  <span className="small-caps">2 murtual friends</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Mikayla King</strong>
                                  <span className="small-caps">20 murtual friends</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Richard Dixon</strong>
                                  <span className="small-caps">1 murtual friend</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Brenda Fuller</strong>
                                  <span className="small-caps">8 murtual friends</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Ryan Ortega</strong>
                                  <span className="small-caps">122 murtual friends</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                            <li>
                              <img src="assets/images/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar" />
                              <div className="row">
                                <div className="col-xs-6">
                                  <strong>Jessica Gutierrez</strong>
                                  <span className="small-caps">45 murtual friends</span>
                                </div>
                                <div className="col-xs-6 text-right btn-action">
                                  <button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <button className="btn btn-primary btn-square btn-block">See all request</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
