import React from 'react'
import logo1 from '../images/logo.webp';
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className='container'>
            <div className={style.navflex}>
              <div className={style.iconimage}>
                <img src={logo1} alt="" />
              </div>
              <div className={style.pages}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/add-robot">AddRobot</Link></li>
                  <li>AboutUs</li>
                  <li>Services</li>
                  <li>Products</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar