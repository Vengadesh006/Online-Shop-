import React from 'react'
import '../style/Nav.css'
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'
import { Home1 } from './Home1'
import { Fashion1 } from './Fashion1'
import { About1 } from './About1'
import { Moblie } from './Moblie'
import { Login } from './Login'

export const Navbar = () => {

  return (
    <>
      <Router>
        <div className="nav-bar">
          <nav className="navbar navbar-expand-lg bg-white fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="container-fluid">
              <h1 className="navbar-brand logo"> E-Shoop </h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3" >
                  <li className="nav-item">
                    <Link to='/' className="nav-link active" aria-current="page"  >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='fashion' className="nav-link active" aria-current="page" >Fashion</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='moblie' className="nav-link active" aria-current="page">Moblie</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='about' className="nav-link active" aria-current="page" >About</Link>
                  </li>

                </ul>

                <div className="login">
                  <Link to='/login' type="button" className="btn btn-danger">Sign Up </Link>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<Home1 />} />
            <Route path='/fashion' element={<Fashion1 />} />
            <Route path='/moblie' element={<Moblie />} />
            <Route path='/about' element={<About1 />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>


      </Router>

      <footer>
      <div className="container-fluid" style={{backgroundColor : "black "}}>
        <div className="row">
          <div className="col-md footer">
              <h3>Corparate Info</h3>
            <ul>
              <li><a href="#">Career & 3VS</a></li>
              <li><a href="#">about & 3VS Group</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">corporate goverance</a></li>
              <li><a href="#">investor relations</a></li>
            </ul>
          </div>
          <div className="col-md footer">
          
            <h3>Shop</h3>
            <ul>
              <li><a href="#">Ladies</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Baby</a></li>
              <li><a href="#">kids</a></li>
              <li><a href="#">Sports</a></li>
            </ul>

          </div>
          <div className="col-md footer">
            <h3>Service</h3>
            <ul>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">My & 3VS</a></li>
              <li><a href="#">Find and Store</a></li>
              <li><a href="#">Legal and Privacy</a></li>
              <li><a href="#">Content</a></li>
              <li><a href="#">Report a scam</a></li>
            </ul>
          </div>
          <div className="col-md footer">
            <h3>Help</h3>
            <ul>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">My & 3VS</a></li>
              <li><a href="#">Find and Store</a></li>
              <li><a href="#">Legal and Privacy</a></li>
              <li><a href="#">Content</a></li>
              <li><a href="#">Report a scam</a></li>
            </ul>
          </div>
        </div>
      </div>

      </footer>


    </>

  )
}
