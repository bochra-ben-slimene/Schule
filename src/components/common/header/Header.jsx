import React, { useState } from "react"
// import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className='flexSB header'>
        <div className='logo'>
            {/* <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span> */} 
            <img src="./images/logo.png" alt=""/>
          </div>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/courses'>All Courses</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='/pricing'>Pricing</a>
            </li>
            <li>
              <a href='/journal'>Journal</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
          <div className='start'>
            {/* <div className='button'>GET CERTIFICATE</div> */}
            <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
