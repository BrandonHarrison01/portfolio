import React from "react";

import "../styling/NavBar.scss";

function NavBar() {
  return (
    <div className='nav-bar'>
      <a href='#home'>Home</a>
      <div className='site-nav'>
        <a href='#technologies'>Technologies</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
