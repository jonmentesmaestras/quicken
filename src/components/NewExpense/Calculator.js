import React, {useState} from 'react';
import CalculatorForm from './CalculatorForm'
import Display from './Display'




const Calculator = (props) => {
  const initResults = [0,0,0,0,0]
     
  const [newResult, setNewResult] = useState(initResults)

  let newConnections = 0
  let newSettlements = 0
  let newDiv = 0
  let newMulti = 0
  let newAverageDebt = 0

    const calculationsHandler = (enteredCalcData) =>{
        const operador = 5
        const percentage = 100


        newConnections =  Number(enteredCalcData.amount) * (Number(enteredCalcData.predictedR)/percentage) 
        
        newSettlements =   Number(newConnections) * (Number(enteredCalcData.predictedSettle)/percentage)

        newDiv =  Number(enteredCalcData.amount)/operador
        newMulti = Number(enteredCalcData.amount)*operador



        setNewResult([newConnections,newSettlements,newDiv,newMulti])



        //props.onOperation("datos")
    }

  return (
    <div>
   
    <CalculatorForm onSaveCalcData={calculationsHandler}></CalculatorForm>
    <Display result={newResult}></Display>
    </div>
  )
}


export default Calculator