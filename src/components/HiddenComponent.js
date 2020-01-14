import React, { useState } from 'react'

import '../styling/HiddenComponent.scss'

function HiddenComponent(props) {

    // const [isPopulated, setIsPopulated] = useState(false)

    // props.populateModal ? setIsPopulated(true) : setIsPopulated(false)

    return(
        <div className={props.toggle ? 'modal block' : 'modal none'}>
            <div className='modal-main'>
                <div className='modal-title'>
                    <h1>{props.populateModal.title}</h1>
                    <p onClick={props.toggleModalOff} >X</p>
                </div>
                <div className='modal-body'>
                    <p>{props.populateModal.summary}</p>
                </div>
            </div>
        </div>
    )
}

export default HiddenComponent