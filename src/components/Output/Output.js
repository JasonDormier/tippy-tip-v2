import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Output.module.css';


const Output = (props) => {

    return (
        <>
            <Card className={classes.output}>
                <span><em>Tip Amount</em> <br />/ person</span>
                <span className={classes.totals}>$0.00</span>

                <span> <em>Total</em> <br />
                    / person</span>
                <span className={classes.totals}>$0.00</span>
                <Button className={classes.reset}>Reset</Button>
            </Card>
        </>
    );
};
export default Output;