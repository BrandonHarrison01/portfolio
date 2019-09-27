import React from 'react'

import '../styling/TechnologiesPage.scss'

function TechnologiesPage() {
    return(
        <div className='tech-page'>
            <h1>Technologies I have experience with</h1>
            <div className='tech'>
                <div>
                    <h2>Front-End</h2>
                    <ul>
                        <li>html</li>
                        <li>css/less/sass</li>
                        <li>javascript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Redux</li>
                    </ul>
                </div>
                <div>
                    <h2>Back-End</h2>
                    <ul>
                        <li>node.js</li>
                        <li>mySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesPage