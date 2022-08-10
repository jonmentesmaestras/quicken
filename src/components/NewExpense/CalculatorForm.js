import React, {useState} from 'react';

const CalculatorForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredPredictedR, setEnteredPredictedR] = useState('');
    const [enteredPredictedSettle, setEnteredPredictedSettle] = useState('')
    const [enteredAverageDebt, setEnteredAverageDebt] = useState('')

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
       
    };

    const predictedRChangeHandler = (event) => {
      setEnteredPredictedR(event.target.value);
     
    };

    const predictedSettleChangeHandler = (event) => {
      setEnteredPredictedSettle(event.target.value);
     
    };

    const averageDebtChangeHandler = (event) => {
      setEnteredAverageDebt(event.target.value);
     
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        const calcData = {
          amount: enteredAmount,
          predictedR: enteredPredictedR,
          predictedSettle: enteredPredictedSettle,
          averageDebt: enteredAverageDebt
          
        };
    
        props.onSaveCalcData(calcData);
        
        
        /*setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        */
      };

  return (
    <div>
        <form onSubmit={submitHandler}>
          <div >
            <label>Accounts</label>
            <input
              type='number'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div >
            <label>Predicted Response</label>
            <input
              type='number'
              value={enteredPredictedR}
              onChange={predictedRChangeHandler}
            />
          </div> 

          <div >
            <label>Predicted Settlement Agreements</label>
            <input
              type='number'
              value={enteredPredictedSettle}
              onChange={predictedSettleChangeHandler}
            />
          </div>
          <div >
            <label>Average Debt</label>
            <input
              type='number'
              value={enteredAverageDebt}
              onChange={averageDebtChangeHandler}
            />
          </div>
           <button type='submit'>Calculate</button>
         </form>
        
    </div>
  )
}

export default CalculatorForm