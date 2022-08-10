import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from './Card';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("this is from filterChangeHandler" + selectedYear);
    
  };
  /*console.log(JSON.stringify(props.items));
  console.log("filteredYear is: " +filteredYear);
  */
  let filteredExpenses = props.items.filter(expense => parseInt(expense.date.getFullYear()) === parseInt(filteredYear));

  //console.log("the returned filtered array: " + JSON.stringify(filteredExpenses));
  //console.log("the returned filtered element array: " + filteredExpenses[0].date.getFullYear());

 
  return (
    <div>
      <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
      </li>
    </div>
  );
};
  
  export default Expenses;