import React from 'react'
import '../PrecinctMap/PrecinctMap.css'
import {Link } from 'react-router-dom'
function PrecinctMap() {
  return (
    <div className="iframe-container">
      <iframe src="/create_map.html" title="learn more" ></iframe>
      <Link to='/learn_more'>
      <p>find a candidate</p>
      </Link>
      
    </div>
  )
}

export default PrecinctMap
