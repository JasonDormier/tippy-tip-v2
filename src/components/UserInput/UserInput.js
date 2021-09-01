//import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './UserInput.module.css';

const UserInput = (props) => {
    return (
        <>
            <Input
                id='bill'
                label='Bill'
                type='number'
                step='0.01'
                placeholder='0.00'
                min='0.00'
                max='9999.99'
            />

            <h2>Select Tip %</h2>
            <div className={classes.tipButtons}>
                <Button>5%</Button>
                <Button>10%</Button>
                <Button>15%</Button>
                <Button>25%</Button>
                <Button>50%</Button>
            </div>
            <Input
                id='custom'
                type='number'
                min='0'
                placeholder='custom'
                className='custom'
            />

            <Input
                id='people'
                label='# of People'
                type='number'
                placeholder='1'
                step='1'
                min='1'
                max='100'
            />

        </>
    );
}

export default UserInput;