
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'
import AskQueries from './components/SupportEngine/AskQueries'
import Conference from './components/conference'
import Compiler from './components/compiler'
import Home from './components/Home'

function App() {
  const handleLogout=()=>{
    window.localStorage.clear();
  window.location.href="./sign-in";
  }

  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2">
                
               {(localStorage.getItem("token"))?
               <li className="nav-item">
               <Link className="btn bg-success text-white mx-1" to={'/AskQueries'}>Ask Queries</Link>
               <Link className="btn bg-success text-white mx-1" to={'/conference'}>Conference</Link>
               <Link className="btn bg-success text-white mx-1" to={'/compiler'}>Compiler</Link>
               </li>
             :"" } 

              </ul>
              {(!localStorage.getItem("token"))?
                  <div className='d-flex'>
                  <Link className="btn bg-success text-white mx-1" to={'/sign-in'}>Login</Link>
                  <Link className="btn bg-success text-white mx-1" to={'/sign-up'}>Sign up</Link>
                  </div>
                :
                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                  Log Out
                </div>
                
                } 

            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/askQueries" element={<AskQueries />} />
              <Route path="/conference" element={<Conference />} />
              <Route path="/compiler" element={<Compiler />} />
            </Routes>
            
          </div>
          
        </div>
        
      </div>
    </Router>
  )
}

export default App