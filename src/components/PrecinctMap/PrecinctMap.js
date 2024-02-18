import React from 'react'
import '../PrecinctMap/PrecinctMap.css'
import {Link } from 'react-router-dom'
function PrecinctMap() {
  return (
    <div>
      <p className='map-title'>Let's Find Your Precinct</p>
    <p className='map-subtitle'>Type in your address to get your unique ballot</p>
      <div className="iframe-container">
          <iframe src="/create_map.html" title="learn more" ></iframe>
      </div>
    </div>
  )
}

export default PrecinctMap
