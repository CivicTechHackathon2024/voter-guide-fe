import React from "react";
import { Link } from "react-router-dom";
import '../LandingPage/LandingPage.css';
import arrow from "../../images/arrow.png";
function LandingPage() {
  return (
    <main className='landing-page-main'>

    <div className='landing-page-wrapper'>
      <h1 className='landing-page-title top'>VOTER</h1>
      <h1 className='landing-page-title bottom'>GUIDE</h1>
      <Link to='/map'>
        <p className='landing-page-btn'>Find Out More</p>
      </Link>
      <div className='landing-page-circle'></div>
      <img src={arrow} className='landing-page-arrow rotated-arrow'></img>
    </div>
    </main>
  );
}

export default LandingPage;
