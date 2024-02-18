import React from 'react'
import '../PrecinctMap/PrecinctMap.css'
import {Link } from 'react-router-dom'
function PrecinctMap() {
  return (
    <div>
      <h2>Scroll over map to view the ward and precinct. Click on a district to view its ballot. Use the magnifying glass button to search for an address.</h2>
      <div className="iframe-container">
          <iframe src="/create_map.html" title="learn more" ></iframe>
      </div>
    </div>
  )
}

export default PrecinctMap
