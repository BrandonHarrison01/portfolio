import React from 'react'

import '../styling/TechnologiesPage.scss'

function TechnologiesPage() {
    return(
        <div className='tech-page'>
            <h1>Technologies I have experience with</h1>
            <div className='tech'>
                <div>
                    <h2>Languages</h2>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                    </ul>
                </div>
                <div>
                    <h2>Libraries and Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Native</li>
                    </ul>
                </div>
                <div>
                    <h2>Tools</h2>
                    <ul>
                        <li>GitHub</li>
                        <li>Insomnia</li>
                        <li>PostMan</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesPage