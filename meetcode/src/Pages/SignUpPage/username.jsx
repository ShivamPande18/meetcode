import React from 'react'
import "./style.css"
import { useState } from "react"

function Username({ setUser }) {

    const [name, setName] = useState("")


    return (
        <div className="signup">
            <div className="signupCont">

                <h1>USER <span>NAME</span></h1>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={() => setUser(name)}>Submit</button>

            </div>
        </div>
    )
}

export default Username