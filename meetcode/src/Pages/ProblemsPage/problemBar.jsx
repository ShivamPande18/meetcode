import React from 'react'
import "./style.css"
import { title } from "../data"

function ProblemBar({ ind, onProblemClick }) {

    let diffStr = "Easy";
    let col = "#00B8A3";

    switch (ind) {
        case 0:
            diffStr = "Easy"
            col = "#00B8A3"
            break;
        case 1:
            diffStr = "Medium"
            col = "#ffc01e"
            break;
        case 2:
            diffStr = "Hard"
            col = "#df3255  "
            break;
        default:
            break;
    }


    return (
        <div className="problemBar" onClick={() => onProblemClick(ind)}>
            <p className='problemBarProb'>{title[ind]}</p>
            <p className='problemBarDiff' style={{ color: `${col}` }} >{diffStr}</p>
        </div>
    )
}

export default ProblemBar