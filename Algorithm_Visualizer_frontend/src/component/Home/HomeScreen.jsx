import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div className="row bs">
      <div style={{ float: 'center' }}>
        <Link to={"/panel"}>
        <button className="btn btn-primary">Go to Workspace</button>
        </Link>
        
      </div>
    </div>

  )
}

export default HomeScreen