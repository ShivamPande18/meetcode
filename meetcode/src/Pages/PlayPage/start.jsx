import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import "./style.css"

function Start({ onPlay }) {
    return (
        <div className="speedrunPageCont">
            <h1 className='speedTitle'>{"CODE++"}</h1>
            <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="btns">
                    {/* <button onClick={() => onPlay()}>EASY</button>
                    <button onClick={() => onPlay()}>MEDIUM</button>
                    <button onClick={() => onPlay()}>HARD</button> */}
                    {/* <button onClick={() => onPlay()}>PLAY</button> */}
                    <button onClick={() => onPlay()}>
                        <CiPlay1 fontSize={"15rem"} />
                    </button>
                </div>

            </div>
            {/* <h1 className='speedTitle'>SPEED <span>RUN</span> </h1> */}
        </div>
    )
}

export default Start