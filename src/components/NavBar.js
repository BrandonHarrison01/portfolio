import React from "react";

import "../styling/NavBar.scss";

function NavBar() {
  const scrollWhere = num => {
    window.scrollTo({
      top: num,
      behavior: "smooth"
    });
  };

  return (
    <div className='nav-bar'>
      <div className='nav-item'>
        <button onClick={() => scrollWhere(0)}>Home</button>
        <div className='underline'/>
      </div>
      <div className='site-nav'>
        <div className='nav-item'>
          <button onClick={() => scrollWhere(1025)}>About</button>
          <div className='underline'/>
        </div>
        <div className='nav-item'>
          <button onClick={() => scrollWhere(2000)}>Projects</button>
          <div className='underline'/>
        </div>
        <div className='nav-item'>
          <button onClick={() => scrollWhere(10000)}>Contact</button>
          <div className='underline'/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
