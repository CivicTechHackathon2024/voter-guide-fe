import React from "react";
import Card from "../Card/Card"
import "../Candidates/Candidates.css"
import "../../App.css"

function Candidates() {
  return (
    <main className='main-content'>
      <h2 className='section-heading'>Presidents</h2>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
      <h2 className='section-heading'>Ward</h2>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Candidates;
