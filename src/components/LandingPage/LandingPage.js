import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className='landing-page-wrapper'>
      <h1>VOTER</h1>
      <h1>GUIDE</h1>
      <Link to='/map'>
        <p>Find Out More</p>
      </Link>
    </div>
  );
}

export default LandingPage;
