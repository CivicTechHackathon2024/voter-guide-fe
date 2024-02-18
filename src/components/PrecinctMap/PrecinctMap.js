import React from 'react';
import { Link } from 'react-router-dom';
import './PrecinctMap.css';

function PrecinctMap() {
  return (
    <div className="precinct-map-container">
      <h1>SELECT YOUR WARD</h1>
      <h3>Scroll over the map to view the ward and precinct. Click on a district to view its ballot. Use the magnifying glass button to search for an address.</h3>
      <div className="iframe-container">
        <iframe src="/create_map.html" title="Precinct Map"></iframe>
      </div>

    </div>
  );
}

export default PrecinctMap;

