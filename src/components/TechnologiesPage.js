import React from 'react'

import CSSIcon from '../images/CSS-Logo.png'
import HTMLIcon from '../images/HTML-Logo.png'
import JSIcon from '../images/JS-Logo.png'
import NodeIcon from '../images/Node-Logo.png'
import ReactIcon from '../images/React-Logo.png'
import ReactNativeIcon from '../images/React-Native-Logo.png'
import ReduxIcon from '../images/Redux-Logo.png'
import SassIcon from '../images/Sass-Logo.png'
import SQLIcon from '../images/SQL-Logo.png'

import '../styling/TechnologiesPage.scss'

function TechnologiesPage() {
    return(
        <div className='tech-page'>
            <div className='title-container'>
                <h1>Technologies I have experience with:</h1>
            </div>
            <div className='tech'>
                <div>
                    <img src={HTMLIcon} />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={SassIcon} />
                    <p>CSS/LESS/SASS</p>
                </div>
                <div>
                    <img src={JSIcon} />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={ReactIcon} />
                    <p>React</p>
                </div>
                <div>
                    <img src={ReactNativeIcon} />
                    <p>React Native</p>
                </div>
                <div>
                    <img src={ReduxIcon} />
                    <p>Redux</p>
                </div>
                <div>
                    <img src={NodeIcon} />
                    <p>Node.js</p>
                </div>
                <div>
                    <img src={SQLIcon} />
                    <p>SQL</p>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesPage