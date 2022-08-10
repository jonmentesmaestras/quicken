

import './AddExpenseButton.css';

const AddExpenseButton = (props) => {

  
  let showAddForm = false;

  const onClickHandler = (event) => {
    
    showAddForm = true;
   
    props.onShowExpenseForm(showAddForm);

    
  };

    return (
    
        <div className='new-expense'>
          <button onClick={onClickHandler}>Add Expense</button>
        </div>
    
    );

  };

export default AddExpenseButton;

