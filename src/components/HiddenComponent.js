import React from 'react'

import '../styling/HiddenComponent.scss'

function HiddenComponent(props) {
    return(
        <div className={props.toggle ? 'on' : 'off'}>
            <p>testing...</p>
            <button onClick={props.toggleModalOff} >close</button>
        </div>
    )
}

export default HiddenComponent