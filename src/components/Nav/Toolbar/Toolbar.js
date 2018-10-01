import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
    <nav className={classes.DesktopOnly}>
            <NavItems /> 
        </nav>
    </header>

);


export default toolbar;