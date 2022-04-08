import React , {useState} from "react";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filterdYear, setFilteredYear] = useState('2020')

  const {items} = props

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  return(
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filterdYear} onFilterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
  
}

export default Expenses;