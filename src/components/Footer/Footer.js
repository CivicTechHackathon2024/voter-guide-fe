import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='footer-left'>
        <p>&copy; 2024 Voter Guide. All rights reserved.</p>
      </div>
      <div className='footer-right'>
        <p>
          Data provided by 
          <Link to='https://www.sec.state.ma.us/WhereDoIVoteMA/ShowBallot/ViewMyBallot/BallotOut/D/35/12/1'  style={{ textDecoration: 'none', color: 'white' }} >
             the Secretary of the Commonwealth of Massachusetts.
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
