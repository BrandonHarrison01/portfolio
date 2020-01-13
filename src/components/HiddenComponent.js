import React from 'react'

import '../styling/HiddenComponent.scss'

function HiddenComponent(props) {
    return(
        <div className={props.toggle ? 'modal block' : 'modal none'}>
            <div className='modal-main'>
                <p>testing...</p>
                <p>{props.populateModal}</p>
                <p onClick={props.toggleModalOff} >X</p>
            </div>
        </div>
    )
}

export default HiddenComponent