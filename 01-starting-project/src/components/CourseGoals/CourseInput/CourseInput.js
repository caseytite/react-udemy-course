import React, { useState, useRef } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import classNames from 'classnames'

const CourseInput = props => {
  const [isValid, setIsValid] = useState(true)
  const goalInputRef = useRef()

  const formClass = classNames('form-control',{
    'form-control invalid': !isValid
  })

  const goalInputChangeHandler = () => {
    const enteredGoal = goalInputRef.current.value
    enteredGoal.trim().length > 0 ? setIsValid(true) : setIsValid(false)
  };
  
  const formSubmitHandler = event => {
    event.preventDefault();
    const enteredGoal = goalInputRef.current.value
    
    if(enteredGoal.trim().length === 0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredGoal);
    goalInputRef.current.value = ''
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label>Course Goal</label>
        <input type="text" ref={goalInputRef} onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
