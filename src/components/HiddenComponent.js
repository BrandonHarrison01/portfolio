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
                        <img className={props.populateModal.title === 'forLife Fitness' ? 'gif desktop' : 'gif'} src={props.populateModal.gif} alt='project gif' />
                    </div>
                    <div className='modal-desc'>
                        <h2>My Role</h2>
                        <p className='paragraph'>{props.populateModal.role}</p>
                        <h2>Project Difficulties</h2>
                        <p className='paragraph'>{props.populateModal.difficulties}</p>
                        <h2>My Solution</h2>
                        <p className='paragraph'>{props.populateModal.solution}</p>
                        <h2>Notable Features</h2>
                        <ul>
                            {props.populateModal.features.map(bullet => <li key={bullet.id}>{bullet.bullet}</li>)}
                        </ul>
                        {props.populateModal.title === 'Key Conservation' ? <p>*App is currently in testing phase on Google Play and the App Store.</p> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiddenComponent
