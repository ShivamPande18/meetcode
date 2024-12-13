import React from 'react'
import "./style.css"

function Countdown({ counter }) {

    return (
        <div className='countdown'>
            <div className="countdownCont">
                <h1>{counter}</h1>
            </div>
        </div>
    )
}

export default Countdown