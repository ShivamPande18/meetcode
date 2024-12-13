import React from 'react'
import { executeCode } from "../../api"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "../../style.css"
import "./style.css"
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { title } from "../data"
import { cppStartCode } from "../cppStartCode"
import { cppPreCode } from "../cppPreCode"
import { desc } from "../desc"
import { Interweave } from "interweave"
import Editor from '@monaco-editor/react';
import { useLocation } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { updateScore } from "../SignUpPage/signUpPage"


function CodePage() {
    const nav = useNavigate()
    const loc = useLocation();
    const uid = "loc.state.uid";
    const db = "loc.state.db";

    // const uid = loc.state.uid;
    // const db = loc.state.db;

    // const [problemInd, setProblemInd] = useState(Math.floor(Math.random() * 20))
    const [problemInd, setProblemInd] = useState(Math.floor(0))
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)
    const [output, setOutput] = useState("Run the code for result")
    const [ended, setEnded] = useState(false)

    const [seconds, setSeconds] = useState(6000);
    const [timer, setTimer] = useState("00:00");
    const [qTime, setQTime] = useState(60);
    const [points, setPoints] = useState(0)

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
                if (qTime > 0) setQTime(qTime - 1);
                setTime()
            }, 1000);

            return () => clearInterval(timerId);
        }
        else {
            gameOver()
        }
    }, [seconds]);

    function setTime() {
        let min = Math.floor(seconds / 60)
        let sec = seconds - Math.floor((min * 60));
        let minstr = min.toString();
        let secstr = sec.toString();

        if (min < 10) minstr = '0' + minstr;
        if (sec < 10) secstr = '0' + secstr;
        setTimer(minstr + ':' + secstr)
    }

    document.onkeydown = function (e) {
        if (e.code == "Space") nextProblem();
    }

    async function gameOver() {
        const data = await updateScore(uid, points);
        nav("/ranking", { state: { uid: uid, data: data } });
    }



    const runCode = async () => {

        setLoading(true);
        const sourceCode = code;
        if (!sourceCode) return;
        try {
            // setIsLoading(true);
            const { run: result } = await executeCode("c++", sourceCode, problemInd);
            // const { run: result } = await executeCode("c++", sourceCode, 0);
            // let res = (result.output.split("\n"));
            // setOutput(result.output);
            // console.log(res);
            // res.forEach(s => {
            //     setOutput(output + s + "\n");
            // });

            let res = true;

            if (result.stderr) {
                setOutput(result.stderr);
                res = false;
            }
            else {
                let strs = (result.output)
                if (strs.includes("failed.")) res = false;
                setOutput(result.output);
            }
            setLoading(false);
            console.log(res);

            if (!res) {

                // question solved

                if (qTime >= 40) {
                    setPoints(points + 4);
                }
                else if (qTime >= 20) {
                    setPoints(points + 2);
                }
                else {
                    setPoints(points + 1)
                }

                setQTime(60);
                nextProblem();
            }


        } catch (error) {
            console.log(error);
        }
    };


    function onEditor(e) {
        // console.log(e);
        setCode(e)
    }

    function nextProblem() {
        // let newInd = Math.floor(Math.random() * 20);
        let newInd = problemInd + 1;
        setProblemInd(newInd);
        setCode(cppStartCode[newInd]);
    }



    return (
        <div className="App" >

            <div className="appCont">

                <div className="btnCont">
                    {/* <button className="runBtn" onClick={loc.state.onBackClick}>  <IoMdArrowRoundBack className="runIcon" /> Back </button> */}
                    <div className='btnFlex flexLeft'>
                        <p className='timer'>{timer}</p>
                    </div>

                    <div className='btnFlex flexMid'>
                        <button className="runBtn" onClick={runCode} >
                            {loading ? <FaPause /> : <FaPlay className="runIcon" />}
                            Run
                        </button>
                    </div>

                    <div className='btnFlex flexRight'>
                        <p className='timer points'><FaFire style={{ color: "black", fill: 'black' }} /> {points}</p>
                    </div>


                </div>

                <div className="panelCont">

                    <div className="probPanel panel">
                        <h1> {problemInd + 1}. {title[problemInd]} </h1>
                        <div className="problemItem">
                            {/* <p>{desc[problemInd]}</p> */}
                            <Interweave content={desc[problemInd]} />
                        </div>
                    </div>
                    <div className="solPanel panel">

                        <div className="editorPanel">
                            <Editor
                                width="100%"
                                height="100%"
                                defaultLanguage='cpp'
                                defaultValue={cppStartCode[problemInd]}
                                value={code}
                                onChange={onEditor}
                                theme='vs-dark'
                                className='editor'


                            />
                        </div>
                        <div className="testPanel">
                            <h1>Output</h1>
                            <Interweave content={output} />
                        </div>
                    </div>

                    {/* <iframe src="https://trinket.io/embed/python3/a5bd54189b?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> */}


                </div>
            </div>

        </div >
    );
}

export default CodePage