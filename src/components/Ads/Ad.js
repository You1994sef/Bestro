import React from 'react';
import classes from './Ad.css';
import myImage from '../../lady_img.jpeg';


const ad = (props) => (

        <div className={classes.firstAd}>
            <img src={myImage} alt="This is logo" />
            
        <p>The Way To Success</p>
        </div>

    
)

export default ad;