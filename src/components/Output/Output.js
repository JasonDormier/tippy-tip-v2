import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Output.module.css';


const Output = (props) => {

    let bill = props.passBill.value;
    let tipPercentage = props.passTip.value;
    let people = props.passPeople.value;

    const tip = () => {
        
        return (Math.round((tipPercentage * (bill / people)) * 100) / 100).toFixed(2);
    }

    const billPerPerson = () => {
        return (Math.round((bill / people) * 100) / 100).toFixed(2);
    }

    return (
        <>
            <Card className={classes.output}>
                <span><em>Tip Amount</em> / person</span>
                <span className={classes.totals}>${tip()}</span>

                <span> <em>Total</em> / person</span>
                <span className={classes.totals}>${billPerPerson()}</span>
                <Button id='resetButton' className={classes.reset} onClick={props.reset}>Reset</Button>
            </Card>
        </>
    );
};
export default Output;