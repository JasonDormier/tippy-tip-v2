import React from 'react';
import classes from './Button.module.css';
const Button = props => {
    return(
        <div 
        type={props.type}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        >{props.children}</div>
    )
}

export default Button;