import React, { useState, useEffect } from "react";
import Card from "../Card/Card"
import "../Candidates/Candidates.css"
import "../../App.css"
import { useParams } from 'react-router-dom';

function Candidates() {
  const { val1, val2 } = useParams();
  const [candidatesData, setCandidatesData] = useState([]);
  let count = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        const filteredData = jsonData.filter(item => item.ward === parseInt(val1) && item.precinct === parseInt(val2));
        
        const getFullPartyName = abbreviation => {
          switch (abbreviation) {
            case "D":
              return "Democrat";
            case "L":
              return "Libertarian";
            case "R":
              return "Republican";
            default:
              return abbreviation; 
          }
        };
        const presidentialCandidates = {};
        presidentialCandidates.candidates = filteredData.flatMap(item => 
          item.presidential.map(name => ({ name, party: getFullPartyName(item.party) }))
        );

       
        const wardCandidates = {};
        wardCandidates.candidates = filteredData.flatMap(item => 
          item.ward_data.map(name => ({ name, party: getFullPartyName(item.party) }))
        );
        

        setCandidatesData({ presidential: presidentialCandidates, ward_data: wardCandidates });
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [val1, val2]);

  return (
    <main className='main-content'>
      <h2 className='section-heading'>Presidential</h2>
      <div className='card-container'>
      {candidatesData.presidential && candidatesData.presidential.candidates.map(candidate => (
          <Card key={candidate.name} name={candidate.name} party={candidate.party}/>
        ))}
      </div>
      <h2 className='section-heading'>Ward</h2>
      <div className='card-container'>
      {candidatesData.ward_data && candidatesData.ward_data.candidates.map(candidate => (
          <Card key={candidate.name} name={candidate.name} party={candidate.party}/>
        ))} 
      </div>
    </main>
  );
}

export default Candidates;
