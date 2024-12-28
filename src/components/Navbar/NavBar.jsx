import React from "react";
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className = 'navBar-container'>
            <Link to = '/'>Home</Link>
        </div>
    )
}

export default NavBar