import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HowToVote from "./components/HowToVote/HowToVote";
import Candidates from "./components/Candidates/Candidates"
import LandingPage from "./components/LandingPage/LandingPage";
import PrecinctMap from "./components/PrecinctMap/PrecinctMap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/learn_more/*' element={<Candidates/>}></Route>
        <Route path='/how_to_vote' element={<HowToVote/>}></Route>
        <Route path='/map' element={<PrecinctMap/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;