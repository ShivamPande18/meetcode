import React from 'react'
import "./style.css"
import RankBar from './rankBar'
import { useLocation, useNavigate } from "react-router-dom"
import { getLeader } from "../SignUpPage/signUpPage"
import { useState } from "react"


// async function getData() {

//     const data = await getLeader(uid);
// }

function RankingPage() {
    const nav = useNavigate();
    const loc = useLocation();
    const uid = loc.state.uid;
    const data = loc.state.data;
    // const [data, setData] = useState({})


    return (
        <div className='rankingPage'>
            <div className="rankingPageCont">
                <div className="title">
                    <h1>LEADER <span>BOARD</span> </h1>
                </div>

                <div className="rankingTable">

                    {data.map((x, i) =>
                        <RankBar key={i} ind={i} uname={x["username"]} score={x["score"]} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default RankingPage