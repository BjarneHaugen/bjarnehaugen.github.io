import React from "react";
import "../css/header.css";

const Header = () => (


  <header>
    <div className="headerBar"> </div>
    <div className="headerBarCut"> </div>
    <img id="logo" src="https://i.imgur.com/iNWPC5j.png" alt="Logo" onClick={() => window.location.hash = '#/'} style={{ cursor: 'pointer' }} />
  </header>
);

export default Header;
