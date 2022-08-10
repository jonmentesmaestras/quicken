
import React, {useState} from 'react';
import Expenses from './components/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import AddExpenseButton from './components/AddExpenseButton';
import Calculator from './components/NewExpense/Calculator';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showHideDemo1, setshowHideDemo1]  = useState(false);
  const [showButton, setShowButton] = useState(true);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      setshowHideDemo1(false);
      setShowButton(true);
      return [expense, ...prevExpenses];
    });
  };
  
  const operationHandler = (data) => {
    console.log('operation Handler function')
    console.log(data)
  };
  
  
  const showExpenseHandler = (isShow) =>{
    

    setshowHideDemo1(isShow);
    setShowButton(false);
    
    
  }
  

  return (
    <div>
     
    {/*   {showButton &&  <AddExpenseButton onShowExpenseForm={showExpenseHandler} />}

      {showHideDemo1 && <NewExpense onAddExpense={addExpenseHandler} />}
      
      <Expenses items={expenses} />
     */}
     {/*<Calculator onOperation = {operationHandler}></Calculator> */}

     <Calculator ></Calculator>
    
    </div>
  );
};

export default App;



