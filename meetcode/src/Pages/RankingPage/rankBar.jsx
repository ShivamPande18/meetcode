import React from 'react'
import "./style.css"

function RankBar({ ind, uname, score }) {
    let index = "0";
    if (ind == 0) index = "--";
    else {
        if (ind + 1 < 10) index = '0' + ind;
    }
    return (
        <div className='rankBar' >
            <p className='rank'>{index}</p>
            <p className='rankName'>{uname}</p>
            <p className='rankTime'>{score}</p>
        </div>
    )
}

export default RankBar