import React from "react";
import LogoDh from "../images/logo-DH.png";
import { Link, Routes, Route, Switch } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

function Sidebar() {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={LogoDh} alt="Digital House" />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Routes>
        <Route path="/" element={ContentWrapper}/>
      </Routes>

      <Routes>
        <Route path="/" element={ContentWrapper}/>
      </Routes>

      <Routes>
        <Route path="/" element={ContentWrapper}/>
      </Routes>

      <Routes>
        <Route path="/" element={ContentWrapper}/>
      </Routes>
    </React.Fragment>
  );
}

export default Sidebar;
