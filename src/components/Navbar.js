import React from "react";
import "./Navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  const openMenu = ()=>{
    document.querySelector(".menu").classList.toggle("scrollmenu")
  };
  return (
   <>
    <header>
      <div className="container-md px-md-3 px-0 d-flex align-items-center justify-content-between py-md-3">
     <Link to="/"><img src="../rooftoplogo.webp" width="80" className="ms-md-0 ms-3"/></Link> 
      <nav className="d-md-block d-none">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/offmarket">OffMarket</Link>
        <Link to="/onmarket">OnMarket</Link>
      </nav>
      <i className="bi bi-list d-md-none" onClick={openMenu}></i>
      </div>
    </header>

    {/* menu */}
  
    <div className="menu py-5 px-3 d-md-none">
      <a href="/"><img src="/images/logo-footer.webp" width="100"/></a> 
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/offmarket">OffMarket</a></li>
      <li><a href="/onmarket">OnMarket</a></li>
    </ul>
    </div>
   
   </>
  );
};

export default Navbar;
