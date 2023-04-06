import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "../images/image.jpg"
import logo from "../images/logo.png"

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/" className="brand-link">
            <img
              src={logo}
              alt="AdminLTE Logo"
              className="brand-image elevation-3"
              style={{ opacity: "1" }}
            />
            {/* <span className="brand-text font-weight-light"> </span> */}
            <br/>
          </a>

          

          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={profile}
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info" style={{ color: "white" }}>
                Varun Katiyar
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
                  <Link to="/dashboard" className="nav-link">
                    <i className="nav-icon fa fa-user" />
                    <p>My Profile</p>
                  </Link>
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
                      <Link to="/property" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>My Wishlist</p>
                      </Link>
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
                      <Link to="/property" className="nav-link">
                        <i className="fa fa-circle nav-icon" />
                        <p>My Property</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/new" className="nav-link">
                        <i className="fa fa-circle fa-xs nav-icon" />
                          <p>Add Property</p>
                        
                      </Link>
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
