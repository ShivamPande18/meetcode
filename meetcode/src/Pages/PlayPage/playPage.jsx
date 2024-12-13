import React from 'react'
import "../../style.css"
import "./style.css"
import { useState } from "react"
import Start from './start';
import Countdown from './countdown';
import { useNavigate, useLocation } from "react-router-dom"

function PlayPage() {

    const nav = useNavigate()
    const loc = useLocation();
    const uid = loc.state.uid;

    const [count, setCount] = useState(false)
    const [counter, setCounter] = useState("3")

    function onPlay(level) {
        setCount(true)
        setCounter(3)
        setTimeout(() => {
            setCounter("2")
        }, 1000);

        setTimeout(() => {
            setCounter("1")
        }, 2000);

        setTimeout(() => {
            setCounter("<CODE/>")
        }, 3000);

        setTimeout(() => {
            nav("/code", { state: { problemInd: 1, uid: uid } });
        }, 4000);

    }

    return (
        <div className='speedrunPage'>
            {count ? <Countdown counter={counter} /> : <Start onPlay={onPlay} />}
        </div >
    )
}

export default PlayPage