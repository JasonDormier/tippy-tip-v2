import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './UserInput.module.css';

const UserInput = (props) => {

    const [tipPrecentage, setTipPrecentage] = useState(.1);
    const [billInput, setBillInput] = useState(0);
    const [people, setPeople] = useState(1);

    const onChangeHandler = event => {
        event.preventDefault();
        if(event.target.id === 'bill'){
            setBillInput(event.currentTarget.value);
        }
        if(event.target.id === 'people'){
            setPeople(event.currentTarget.value);
        }
        if(event.target.id === 'custom'){


            setTipPrecentage(event.currentTarget.value / 100);
        }
    };

    const onClickHandler = event => {
        event.preventDefault();
        //const clickedButtonValue = event.currentTarget.value;
        setTipPrecentage(event.target.value);
    };

    useEffect(() => {

        console.log('bill amount: ', billInput);
        console.log('tip: ', tipPrecentage);
        console.log('people: ', people);
        props.onInputData({
            bill: billInput,
            tip: tipPrecentage,
            people: people
        });
    }, [billInput, tipPrecentage, people]);

    return (
        <>
            {/* <input value={billInput} onChange={onChangeHandler}/> */}
            <Input
                id='bill'
                label='Bill'
                type='number'
                step='0.01'
                placeholder='0.00'
                min='0.00'
                max='9999.99'
                value={billInput}
                onChange={onChangeHandler}
            />

            <h2>Select Tip %</h2>
            <div className={classes.tipButtons}>
                <Button value={.05} onClick={onClickHandler}>5%</Button>
                <Button value={.1} onClick={onClickHandler}>10%</Button>
                <Button value={.15} onClick={onClickHandler}>15%</Button>
                <Button value={.25} onClick={onClickHandler}>25%</Button>
                <Button value={.5}onClick={onClickHandler}>50%</Button>
                <Input
                    className={classes.custom}
                    id='custom'
                    type='number'
                    min='0'
                    placeholder='custom'
                    onChange={onChangeHandler}
                    />
            </div>

            <Input
                id='people'
                label='# of People'
                type='number'
                placeholder='1'
                step='1'
                min='1'
                max='100'
                onChange={onChangeHandler}
            />

        </>
    );
}

export default UserInput;