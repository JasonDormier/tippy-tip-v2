import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Output.module.css';


const Output = (props) => {

    // console.log('Bill data in output: ', props.passBill);
    // console.log('Tip data in output: ', props.passTip);
    // console.log('People data in output: ', props.passPeople);

    // const [tipPercentage, setTipPercentage] = useState(props.passTip);
    // const [bill, setBill] = useState(props.passBill);
    // const [people, setPeople] = useState(props.passPeople);

    //console.log('Data in output: ', props.passData);

    let bill = props.passData.bill;
    let tipPercentage = props.passData.tip;
    let people = props.passData.people;

    const tip = () => {
        return (Math.round((tipPercentage * (bill / people)) * 100) / 100).toFixed(2);
    }

    const billPerPerson = () => {
        return (Math.round((bill / people) * 100) / 100).toFixed(2);
    }

    // const resetHandler = event => {
    //     event.preventDefault();
    //     console.log('this fired');
    //     props.outPutData({
    //         bill: (Math.round(0 * 100) / 100).toFixed(2),
    //         people: 1,
    //         tip: .1
    //     });
    // }

    //props.reset();

    return (
        <>
            <Card className={classes.output}>
                <span><em>Tip Amount</em> <br />/ person</span>
                <span className={classes.totals}>${tip()}</span>

                <span> <em>Total</em> <br />
                    / person</span>
                <span className={classes.totals}>${billPerPerson()}</span>
                <Button className={classes.reset} onClick={props.reset}>Reset</Button>
            </Card>
        </>
    );
};
export default Output;