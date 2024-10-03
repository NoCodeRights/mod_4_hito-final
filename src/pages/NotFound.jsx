import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div >
      <h3> Parece que se comieron todo... hasta la página misma! </h3>
      <Link to= "/"> <button> Volver al inicio </button> </Link>
    </div>
  )
}

export default NotFound;