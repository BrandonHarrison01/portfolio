import React from 'react'

import '../styling/HiddenComponent.scss'

function HiddenComponent(props) {

    return(
        <div className={props.toggle ? 'modal block' : 'modal none'}>
            <div className='modal-main'>
                <div className='modal-title'>
                    <h1>{props.populateModal.title}</h1>
                    <p onClick={props.toggleModalOff} >X</p>
                </div>
                <div className='modal-body'>
                    <div>
                        <img src={props.populateModal.gif} alt='project gif' />
                    </div>
                    <div className='modal-desc'>
                        <h2>My Role</h2>
                        <h2>Project Difficulties</h2>
                        <h2>My Solution</h2>
                        <h2>Notable Features</h2>
                        <ul>
                            {props.populateModal.summary.map(bullet => <li key={bullet.id}>{bullet.bullet}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiddenComponent