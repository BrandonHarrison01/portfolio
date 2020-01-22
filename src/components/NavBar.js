import React from "react";

import "../styling/NavBar.scss";

function NavBar() {

    const scrollWhere = (num) => {
        window.scrollTo({
            top: num,
            behavior: 'smooth'
        })
    }

  return (
      <div className='nav-bar'>
        <button onClick={() => scrollWhere(0)}>Home</button>
        <div className='site-nav'>
          <button onClick={() => scrollWhere(2000)}>Projects</button>
          <button onClick={() => scrollWhere(1025)}>About</button>
          <button onClick={() => scrollWhere(10000)}>Contact</button>
        </div>
      </div>
  );
}

export default NavBar;
