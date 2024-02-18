import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HowToVote from "./components/HowToVote/HowToVote";
import Candidates from "./components/Candidates/Candidates"
import LandingPage from "./components/LandingPage/LandingPage";
import PrecinctMap from "./components/PrecinctMap/PrecinctMap";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Voter Guide</h1>
        <Link to='how_to_vote'>How To Vote</Link>
      </header>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/learn_more/*' element={<Candidates/>}></Route>
        <Route path='/how_to_vote' element={<HowToVote/>}></Route>
        <Route path='/map' element={<PrecinctMap/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
