import React from "react";
import "./Navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <header className="container d-flex align-items-center justify-content-between py-md-3">
     <Link to="/"><img src="../rooftoplogo.webp" width="80"/></Link> 
      <nav className="d-md-block d-none">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/offmarket">OffMarket</Link>
        <Link to="/onmarket">OnMarket</Link>
      </nav>
      <i className="bi bi-list d-md-none "></i>
    </header>
    </div>
  );
};

export default Navbar;
