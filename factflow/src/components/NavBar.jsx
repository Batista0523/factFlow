import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div>

      <Link to="/">
        <h1 className="nav-branch">Fact Flow</h1>
      </Link>
      </div>
      <Link to="create-resource">
        <button className="create-btn">Create New Resource</button>
      </Link>
    </div>
  );
};

export default NavBar;
