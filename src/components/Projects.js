import React from 'react' 

import '../styling/Projects.scss'

import Steve from '../images/Screenshot.png'


function Projects() {
    return(
        <div className='projects'>
            <h1>Projects:</h1>
            <div className='project-card'>
                <img src={Steve} />
                <div className='project-info'>
                    <h2>Blackjack Card Counter</h2>
                    <p>
                        The blackjack card counter is a web app designed for mobile use.  The purpose of the app is to help the consumer practice his/her card counting skills and develop an understanding on how card counting works.
                    </p>
                    <div>
                        <a href='https://github.com/BrandonHarrison01/card-counter' target='_blank'>GitHub</a>
                        <a href='https://blakjak-counter.netlify.com/' target='_blank'>Link</a>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-info'>
                    <h2>Blackjack Card Counter</h2>
                    <p>
                        The blackjack card counter is a web app designed for mobile use.  The purpose of the app is to help the consumer practice his/her card counting skills and develop an understanding on how card counting works.
                    </p>
                    <div>
                        <a href='https://github.com/BrandonHarrison01/card-counter' target='_blank'>GitHub</a>
                        <a href='https://blakjak-counter.netlify.com/' target='_blank'>Link</a>
                    </div>
                </div>
                <img src={Steve} />
            </div>
            <div className='project-card'>
                <img src={Steve} />
                <div className='project-info'>
                    <h2>Blackjack Card Counter</h2>
                    <p>
                        The blackjack card counter is a web app designed for mobile use.  The purpose of the app is to help the consumer practice his/her card counting skills and develop an understanding on how card counting works.
                    </p>
                    <div>
                        <a href='https://github.com/BrandonHarrison01/card-counter' target='_blank'>GitHub</a>
                        <a href='https://blakjak-counter.netlify.com/' target='_blank'>Link</a>
                    </div>
                </div>
            </div>
            <div className='project-card'>
                <div className='project-info'>
                    <h2>Blackjack Card Counter</h2>
                    <p>
                        The blackjack card counter is a web app designed for mobile use.  The purpose of the app is to help the consumer practice his/her card counting skills and develop an understanding on how card counting works.
                    </p>
                    <div>
                        <a href='https://github.com/BrandonHarrison01/card-counter' target='_blank'>GitHub</a>
                        <a href='https://blakjak-counter.netlify.com/' target='_blank'>Link</a>
                    </div>
                </div>
                <img src={Steve} />
            </div>
        </div>
    )
}

export default Projects