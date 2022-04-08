import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  // another way to do this is use an object

  // const [userInput, setUserInput] = useState({
  //  setTitle: "",  
  //  setAmount: "" , 
  //  setDate: ""  
  // })

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)

    // object to update
    // setUserInput({
    //   ...userInput,
    //   setTitle: e.target.value
    // })

    //another way is to use a callback

    // setUserInput((prevState) => {
    //   return {...prevState,setTitle:e.target.value}
    // })

  }
  
  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  
  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }


  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title,
      amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')

  }


  return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input 
            type="text" 
            value={title} 
            onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input 
            type="number" 
            value={amount} 
            min="0.01" 
            step="0.01" 
            onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input 
            type="date" 
            value={date} 
            min="2019-01-01" 
            max="2022-12-31" 
            onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
    </form>

  );

}

export default ExpenseForm;