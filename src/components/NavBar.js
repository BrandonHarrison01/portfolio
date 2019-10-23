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
        <a onClick={() => scrollWhere(0)}>Home</a>
        <div className='site-nav'>
          <a onClick={() => scrollWhere(1500)}>Technologies</a>
          <a onClick={() => scrollWhere(2300)}>Projects</a>
          <a onClick={() => scrollWhere(10000)}>Contact</a>
        </div>
      </div>
  );
}

export default NavBar;
