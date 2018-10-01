import React from 'react';
import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
    <ul>
        <NavItem className={classes.NavigationItems} active >Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Contact Us</NavItem>

    </ul>

)

export default navItems