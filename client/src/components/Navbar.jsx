import React, { useState } from 'react'
import { ReactComponent as Logo } from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navBarState, setNavBarState] = useState(false)

  const handleClick = () => setNavBarState(!navBarState)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to='/'>
            <Logo />
          </Link>

          <button style={{ border: 'none', background: 'transparent', outline: 'none' }} onClick={ handleClick } className={`navbar-burger burger ${navBarState ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${navBarState ? 'is-active': ''}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to='/register'>
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-primary" to='/signin' className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 
