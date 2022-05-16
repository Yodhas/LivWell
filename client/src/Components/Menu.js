import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/" className="brand-link">
            <img
              src="/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">LivWell</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info" style={{ color: "white" }}>
                Alexander Pierce
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fa fa-user" />
                    <p>My Profile</p>
                  </a>
                </li>
                <li className="nav-item has-treeview menu-open">
                  <a href="/" className="nav-link ">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      User Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/MyBookings" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>My Bookings</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Wishlist" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>My Wishlist</p>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Owner DashBoard */}
                <li className="nav-item has-treeview menu-open">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Owner Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fa fa-circle nav-icon" />
                        <p>My Property</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/dashboard/MyProperty" className="nav-link">
                        <i className="fa fa-circle fa-xs nav-icon" />
                        <Link to="/dashboard/MyProperty">
                          <p>Add Property</p>{" "}
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                      Settings
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/examples/login.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Login</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/register.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Register</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/forgot-password.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Forgot Password</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/recover-password.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Recover Password</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/lockscreen.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Lockscreen</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/legacy-user-menu.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Legacy User Menu</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/examples/language-menu.html"
                        className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Language Menu</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/404.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Error 404</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/500.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Error 500</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/pace.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Pace</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/examples/blank.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Blank Page</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="starter.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Starter Page</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
