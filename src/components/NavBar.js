import React from 'react'

import '../styling/NavBar.scss'

function NavBar() {
    return(
        <div className='nav-bar'>
            <p>Home</p>
            <div className='site-nav'>
                <p>Technologies</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default NavBar