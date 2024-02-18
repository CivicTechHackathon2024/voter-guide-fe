import React from 'react'
import '../PrecinctMap/PrecinctMap.css'
import {Link } from 'react-router-dom'
function PrecinctMap() {
  return (
    <div>
      <p>precinct map</p>
      <Link to='/learn_more'>
      <p>see my candidates</p>
      </Link>
      
    </div>
  )
}

export default PrecinctMap
