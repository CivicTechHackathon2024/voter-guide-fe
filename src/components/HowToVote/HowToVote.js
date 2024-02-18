
import React from 'react';
import './HowToVote.css';

function HowToVote() {
  return (
    <div className="App">

      
      <main className="main-content">
        <h1 className="big-title" style={{ color: '#13376b' }}>HOW TO VOTE</h1>
        
        <div className="sections-container">

           {/* Rules section  */}
          <div className="section">
            <h2 className="section-heading" style={{ color: '#13376b' }}>Rules of Voting</h2>
            <ul className="rule-list">
              <li className="rule-item">
                <span className="rule-title">Voter Eligibility:</span> To be eligible to vote in Boston, individuals must be U.S. citizens, residents of Massachusetts, and at least <b style={{ color: '#c00' }}>18 years old</b> by Election Day.
              </li>
              <li className="rule-item">
                <span className="rule-title">Registration Process:</span> Voters in Boston can register online, by mail, or in person at various government offices. The <b style={{ color: 'blue' }}>deadline</b> for registration is typically <b style={{ color: 'blue' }}>20 days before the election</b>.
              </li>
              <li className="rule-item">
                <span className="rule-title">Polling Locations:</span> Registered voters are assigned to specific polling locations <b style={{ color: '#c00' }}>based on their residential address</b>. These locations are open on Election Day for voting.
              </li>
              <li className="rule-item">
                <span className="rule-title">Absentee Voting:</span> Boston residents who are unable to vote in person on Election Day due to absence from the city, illness, or disability can request an <b style={{ color: 'blue' }}>absentee ballot by mail</b>.
              </li>
              <li className="rule-item">
                <span className="rule-title">Identification Requirements:</span> While Massachusetts does not require voters to show identification at the polls, <b style={{ color: '#c00' }}>first-time voters,</b> who registered by mail may be asked to provide ID or a copy of a <b style={{ color: '#c00' }}>current utility bill, bank statement, government check, paycheck, or other government document showing their name and address</b>.
              </li>
            </ul>
            <button> <b>Learn more...</b>
            </button>
          </div>


          {/* Process section  */}
          <div className="section">
            <h2 className="section-heading" style={{ color: '#13376b' }}>Process on How to Vote</h2>
            <ol className="process-list">
              <li className="process-item">
                <span className="process-title">Registration:</span> Before voting, individuals must ensure they are registered to vote. Residents can register online, by mail, or in person at designated locations.
              </li>
              <li className="process-item">
                <span className="process-title">Voter Information:</span> Registered voters receive information about their assigned polling location and voting options prior to the election.
              </li>
              <li className="process-item">
                <span className="process-title">Voting:</span> On Election Day, voters visit their assigned polling location and present any required identification. They then cast their votes using the provided ballots or voting machines.
              </li>
              <li className="process-item">
                <span className="process-title">Absentee Voting:</span> Individuals unable to vote in person on Election Day may request an absentee ballot. These ballots must be completed and returned by the specified deadline.
              </li>
              <li className="process-item">
                <span className="process-title">Provisional Voting:</span> In certain cases, individuals may be eligible for provisional voting if their eligibility is in question. These votes are counted after verification.
              </li>
            </ol>
            <button> <b>Learn more ...</b>
            </button>
          </div>


        </div>
        
      </main>

    </div>
  );
}

export default HowToVote;
