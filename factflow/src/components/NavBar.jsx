import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Fact Flow
        </Link>
        <Link to="/create-resource">
          <button className="btn btn-primary">Create New Resource</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
