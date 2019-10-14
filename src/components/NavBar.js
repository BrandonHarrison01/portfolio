import React from "react";

import "../styling/NavBar.scss";

function NavBar() {

    const scrollToTop = (num) => {
        window.scrollTo({
            top: num,
            behavior: 'smooth'
        })
    }

  return (
      <div className='nav-bar'>
        <a onClick={() => scrollToTop(0)}>Home</a>
        <div className='site-nav'>
          <a onClick={() => scrollToTop(1500)}>Technologies</a>
          <a onClick={() => scrollToTop(2300)}>Projects</a>
          <a onClick={() => scrollToTop(10000)}>Contact</a>
        </div>
      </div>
  );
}

export default NavBar;
