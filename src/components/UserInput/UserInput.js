import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './UserInput.module.css';

const UserInput = (props) => {

    const [tipPercentage, setTipPercentage] = useState(props.passData.tip);
    const [billInput, setBillInput] = useState({value: props.passData.bill});
    const [people, setPeople] = useState(props.passData.people);

    const [customInputVal, setCustomInputVal] = useState('');

    //add an onFocus that clears the text feild


    const onChangeHandler = event => {
        event.preventDefault();

        if (event.target.id === 'bill') {
            //setBillInput({value: (Math.round(event.currentTarget.value * 100) / 100).toFixed(2)});
            setBillInput({value: event.currentTarget.value});
            //setBillInput(props.passData.bill);
        }
        if (event.target.id === 'people') {
            setPeople(event.currentTarget.value);
        }
        if (event.target.id === 'custom') {
            setCustomInputVal(event.currentTarget.value);
            setTipPercentage(event.currentTarget.value / 100);
        }
    };
    
    const onClickHandler = event => {
        event.preventDefault();
        setTipPercentage(event.target.value);
        setCustomInputVal('');
    };

    useEffect(() => {
        props.inputData({
            bill: billInput.value,
            people: people,
            tip: tipPercentage
        });

    }, [billInput, tipPercentage, people]);

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
                value={billInput.value}
                onChange={onChangeHandler}
            />

            <h2>Select Tip %</h2>
            <div className={classes.tipButtons}>
                <Button value={.05} onClick={onClickHandler}>5%</Button>
                <Button value={.1} onClick={onClickHandler}>10%</Button>
                <Button value={.15} onClick={onClickHandler}>15%</Button>
                <Button value={.25} onClick={onClickHandler}>25%</Button>
                <Button value={.5} onClick={onClickHandler}>50%</Button>
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

            <Input
                id='people'
                label='# of People'
                type='number'
                placeholder='1'
                step='1'
                min='1'
                max='100'
                value={people.value}
                onChange={onChangeHandler}
            />

        </>
    );
}

export default UserInput;