import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './UserInput.module.css';

const UserInput = (props) => {

    const [customInputVal, setCustomInputVal] = useState('');

    //add an onFocus that clears the text feild

    const onChangeHandler = event => {
        event.preventDefault();

        if (event.target.id === 'bill') {
            props.inputBill({ value: event.currentTarget.value });
        }
        // if (event.target.id === 'people') {
        //     props.inputPeople({ value: event.currentTarget.value });
        // }
        if (event.target.id === 'custom') {
            setCustomInputVal(event.currentTarget.value);
            props.inputTip({ value: event.currentTarget.value / 100 });
        }
    };

    const onClickHandler = event => {
        event.preventDefault();
        props.inputTip({ value: event.currentTarget.value });
        setCustomInputVal('');
    };

    const increment = event => {
        event.preventDefault();
        props.inputPeople({ value: props.passPeople.value += 1 });
    }
    const decrement = event => {
        event.preventDefault();
        if (props.passPeople.value === 1) {
            props.inputPeople({ value: props.passPeople.value++ })
        }
        else {
            props.inputPeople({ value: props.passPeople.value -= 1 });
        }
    }

    return (
        <>
            <Input
                id='bill'
                label='Bill'
                type='number'
                placeholder='0.00'
                step='0.01'
                min='0.00'
                max='9999.99'
                value={props.passBill.value}
                onChange={onChangeHandler}
            />

            <h2>Select Tip %</h2>
            <div className={classes.tipButtons}>
                <Button className={classes.tipButton} value={.05} onClick={onClickHandler}>5%</Button>
                <Button className={classes.tipButton} value={.1} onClick={onClickHandler}>10%</Button>
                <Button className={classes.tipButton} value={.15} onClick={onClickHandler}>15%</Button>
                <Button className={classes.tipButton} value={.25} onClick={onClickHandler}>25%</Button>
                <Button className={classes.tipButton} value={.5} onClick={onClickHandler}>50%</Button>
                <Input
                    className={classes.custom}
                    id='custom'
                    type='number'
                    min='0'
                    value={customInputVal}
                    placeholder='custom'
                    onChange={onChangeHandler}
                />
            </div>
            <div className={classes.peopleContainer}>
                <Input
                    className={classes.peopleInput}
                    id='people'
                    label='# of People'
                    type='number'
                    placeholder='1'
                    step='1'
                    min='1'
                    max='100'
                    value={props.passPeople.value}
                    onChange={onChangeHandler}
                    disabled={true}
                />
                <Button className={classes.people} onClick={decrement}>-</Button>
                <Button className={classes.people} onClick={increment}>+</Button>
            </div>

        </>
    );
}

export default UserInput;