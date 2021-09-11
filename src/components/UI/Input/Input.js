import React from 'react';
import './Input.module.css';

const Input = props => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className={props.className}
                type={props.type}
                id={props.id}
                value={props.value}
                min={props.min}
                max={props.max}
                step={props.steps}
                placeholder={props.placeholder}
                onChange={props.onChange}
                pattern="[0-9]"
                disabled = {props.disabled}
            />
        </>
    );
};

export default Input;