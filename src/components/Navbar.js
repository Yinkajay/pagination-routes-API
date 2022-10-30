import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className={styles.path}>Home</NavLink>
            <NavLink to='/About' className={styles.path}>About Us</NavLink>
            <NavLink to='/Users' className={styles.path}>Members</NavLink>
        </nav>
    )
}

export default Navbar;
