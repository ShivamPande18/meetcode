import "../../style.css"
import ProblemBar from "./problemBar"
import "./style.css"
import { useNavigate } from "react-router-dom"

function ProblemPage() {

    const nav = useNavigate()

    function onProblemClick() {
        nav("/code", { state: { problemInd: 1 } })
    }

    return (
        <div className='problemPage'>
            <nav className="navbar">
                <h1 className="icon">YEET<span className="iconSpan">CODE</span></h1>
            </nav>

            <div className="search">
                <div className="searchCont">
                    <input type="text" placeholder="Search for questions" />
                    <button>Search</button>
                </div>
            </div>

            <div className="problems">
                <div className="problemCont">
                    {[...Array(10)].map((x, i) =>
                        <ProblemBar ind={i % 3} onProblemClick={onProblemClick} />
                    )}
                    {/* <ProblemBar /> */}
                </div>
            </div>

        </div>
    )
}

export default ProblemPage