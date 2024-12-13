import CodePage from "./Pages/CodePage/codePage";
import PlayPage from "./Pages/PlayPage/playPage";
import ProblemPage from "./Pages/ProblemsPage/problemPage";
import RankingPage from "./Pages/RankingPage/rankingPage";
import SignUpPage from "./Pages/SignUpPage/signUpPage";
import ProtectedRoute from "./ProtectedRoute";
import "./style.css"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  const [isCodePage, setIsCodePage] = useState(false);
  const [problemInd, setProblemInd] = useState(0);

  function onProblemClick(ind) {
    setIsCodePage(true);
    setProblemInd(ind);
  }

  function onBackClick() {
    setIsCodePage(false);
  }

  return (
    < div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/play" element={<PlayPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/problems" element={<ProblemPage />} />
            <Route path="/code" element={<CodePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
      {/* {isCodePage ? <CodePage problemInd={problemInd} onBackClick={onBackClick} /> : <ProblemPage onProblemClick={onProblemClick} />} */}
    </div >
  );
}

export default App;
