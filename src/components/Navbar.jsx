import React from 'react'
import {Link}  from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sreecharan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link  aria-current="page" to="/">home</Link>
          <Link className="nav-link" aria-current="page" to="/login">login</Link>
          <Link className="nav-link" to='/registration'>Registration</Link>
          <Link className="nav-link" to='/cart'>cart</Link>
          <Link className="nav-link" to='/about'>About</Link>
          <Link className="nav-link" to='/contact'>contact</Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar