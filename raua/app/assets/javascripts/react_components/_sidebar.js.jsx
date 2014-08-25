/** @jsx React.DOM  */
var Sidebar = React.createClass({
  render: function() {
    return (
      <div style={{color:'blue'}}>
        <div className="sidebar-left danger-color sidebar-nicescroller">
          <ul className="sidebar-menu">
            <li><a href="#fakelink"><i className="fa fa-dashboard icon-sidebar" />Dashboard</a></li>
            <li className="active selected"><a href="#fakelink"><i className="fa fa-star icon-sidebar" />Active menu</a></li>
            <li>
              <a href="#fakelink">
                <i className="fa fa-desktop icon-sidebar" />
                <i className="fa fa-angle-right chevron-icon-sidebar" />
                Apps menu
                <span className="badge badge-warning span-sidebar">BADGE</span>
              </a>
              <ul className="submenu">
                <li><a href="#fakelink">Apps submenu-1<span className="label label-success span-sidebar">LABEL</span></a></li>
                <li><a href="#fakelink">Apps submenu-2</a></li>
                <li><a href="#fakelink">Apps submenu-3</a></li>
              </ul>
            </li>
            <li className="active selected">
              <a href="#fakelink">
                <i className="fa fa-cloud icon-sidebar" />
                <i className="fa fa-angle-right chevron-icon-sidebar" />
                Active and visible menu
              </a>
              <ul className="submenu visible">
                <li><a href="#fakelink">Apps submenu -A</a></li>
                <li className="active selected"><a href="#fakelink">Active submenu - B</a></li>
                <li><a href="#fakelink">Apps submenu - C </a></li>
              </ul>
            </li>
            <li className="static">MENU HEADING</li>
            <li><a href="#fakelink"><i className="fa fa-circle icon-sidebar" />Single menu</a></li>
            <li><a href="#fakelink"><i className="fa fa-circle-o icon-sidebar" />Single menu</a></li>
            <li className="static">AWESOME HEADING</li>
            <li className="text-content">
              <div className="switch">
                <div className="onoffswitch blank">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch1" checked="" />
                  <label className="onoffswitch-label" htmlFor="onoffswitch1">
                    <span className="onoffswitch-inner" />
                    <span className="onoffswitch-switch" />
                  </label>
                </div>
              </div>
              Example on off switch
            </li>
            <li className="text-content">
              <div className="switch">
                <div className="onoffswitch blank">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch2" />
                  <label className="onoffswitch-label" htmlFor="onoffswitch2">
                    <span className="onoffswitch-inner" />
                    <span className="onoffswitch-switch" />
                  </label>
                </div>
              </div>
              Example on off switch
            </li>
          </ul>
        </div>
        <div className="sidebar-right sidebar-nicescroller">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="online-user-sidebar">
              <ul className="sidebar-menu online-user">
                <li className="static">ONLINE USERS</li>
                <li><a href="#fakelink">
                    <span className="user-status success" />
                    <img src="assets/images/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar" />
                    <i className="fa fa-mobile-phone device-status" />
                    Thomas White 
                    <span className="small-caps">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                  </a></li>
                <li className="static">IDLE USERS</li>
                <li><a href="#fakelink">
                    <span className="user-status warning" />
                    <img src="assets/images/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar" />
                    <i className="fa fa-windows device-status" />
                    Elizabeth Owens
                    <span className="small-caps">2 hours</span>
                  </a></li>
                <li className="static">OFFLINE USERS</li>
                <li><a href="#fakelink">
                    <span className="user-status danger" />
                    <img src="assets/images/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar" />
                    Craig Dixon
                    <span className="small-caps">Last seen 2 hours ago</span>
                  </a></li>
              </ul>
            </div>
            <div className="tab-pane fade" id="notification-sidebar">
              <ul className="sidebar-menu sidebar-notification">
                <li className="static">TODAY</li>
                <li><a href="#fakelink" data-toggle="tooltip" title="Maria Simpson" data-placement="left">
                    <img src="assets/images/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar" />
                    <span className="activity">Change her avatar</span>
                    <span className="small-caps">20 hours ago</span>
                  </a></li>
                <li className="static">YESTERDAY</li>
                <li><a href="#fakelink" data-toggle="tooltip" title="Jason Crawford" data-placement="left">
                    <img src="assets/images/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar" />
                    <span className="activity">Posted something on your profile page</span>
                    <span className="small-caps">Yesterday 10:45:12</span>
                  </a></li>
                <li className="static text-center"><button className="btn btn-primary btn-sm">See all notifications</button></li>
              </ul>
            </div>
            <div className="tab-pane fade" id="task-sidebar">
              <ul className="sidebar-menu sidebar-task">
                <li className="static">UNCOMPLETED</li>
                <li><a href="#fakelink" data-toggle="tooltip" title="in progress" data-placement="left">
                    <i className="fa fa-clock-o icon-task-sidebar progress" />
                    In progress task
                    <span className="small-caps">Deadline : Next week</span>
                  </a></li>
                <li><a href="#fakelink" data-toggle="tooltip" title="uncompleted" data-placement="left">
                    <i className="fa fa-exclamation-circle icon-task-sidebar uncompleted" />
                    Uncompleted task
                    <span className="small-caps">Deadline : 2 hours ago</span>
                  </a></li>
                <li className="static">COMPLETED</li>
                <li><a href="#fakelink" data-toggle="tooltip" title="completed" data-placement="left">
                    <i className="fa fa-check-circle-o icon-task-sidebar completed" />
                    Completed task
                    <span className="small-caps">Completed : 10 hours ago</span>
                  </a></li>
                <li className="static text-center"><button className="btn btn-success btn-sm">See all tasks</button></li>
              </ul>
            </div>
            <div className="tab-pane fade" id="setting-sidebar">
              <ul className="sidebar-menu">
                <li className="static">ACCOUNT SETTING</li>
                <li className="text-content">
                  <div className="switch">
                    <div className="onoffswitch blank">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch3" />
                      <label className="onoffswitch-label" htmlFor="onoffswitch3">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  Example on off switch
                </li>
                <li className="text-content">
                  <div className="switch">
                    <div className="onoffswitch blank">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onoffswitch4" />
                      <label className="onoffswitch-label" htmlFor="onoffswitch4">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  Example on off switch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
