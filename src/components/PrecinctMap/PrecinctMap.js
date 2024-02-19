import React from 'react';
import { Link } from 'react-router-dom';
import './PrecinctMap.css';

function PrecinctMap() {
  return (
    <div>
      <p className='map-title'>Let's Find Your Precinct</p>
    <p className='map-subtitle'>Type in your address to get your unique ballot</p>
      <div className="iframe-container">
        <iframe src="/create_map.html" title="Precinct Map"></iframe>
      </div>

    </div>
  );
}

export default PrecinctMap;

