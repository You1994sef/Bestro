import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul>
        <NavItem className={classes.NavigationItems} active >Home</NavItem>
        <NavItem link='/' >Services</NavItem>
        <NavItem link='/'>About Us</NavItem>
        <NavItem link='/'>Contact Us</NavItem>

    </ul>

)

export default navItems