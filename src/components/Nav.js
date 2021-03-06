import React from 'react'
import {Link} from "react-router-dom" 
const Nav = () => {
    return (
        <div className="navbar">
            <div className="logo">
               <h1> Movie Mania </h1>
            </div>
            <div className="search">
                <input type="search" className="ip_s" placeholder="Enter movie name to search"/>
            </div>
            <div className="menus">
                <ul className="menu">
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/watchlist'>Watchlist</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
