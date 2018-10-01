import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';


class Layout extends Component {
    render(){
        return(
            <Aux>
                <Toolbar />
                <main className={classes.Content}>Test</main>

            </Aux>
        )
    }
}

export default Layout;