import React, { useState,useEffect, useReducer,useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../input/Input';

const emailReducer = (state,action) => {
  if(action.type === "USER_INPUT"){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_PASSWORD'){
      return {value: action.val, isValid: action.val.trim().length > 6}
    }
    if(action.type === 'PASSWORD_2'){
      return {value: state.value, isValid: state.value.trim().length > 6 }
    }
    return{value: '', isValid: false}
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  
  const contextData = useContext(AuthContext)

const [emailState, dispatchEmail] = useReducer(emailReducer,{
  value: '',
  isValid: null
},)

const [passwordState,dispatchPassword] = useReducer(passwordReducer, {
  value: '',
  isValid: null
})

const {isValid: emailIsValid} = emailState
const {isValid: passwordIsValid} = passwordState
console.log(emailIsValid,passwordIsValid);

  useEffect(() => {  
   const timer= setTimeout(() => {

     console.log('email check');  
     setFormIsValid(
        emailIsValid && passwordIsValid
        ); 
      }, 750);

      return () => {console.log('cleanup'); clearTimeout(timer)}
  },[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {   
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_PASSWORD', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_2'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    contextData.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          type="email" 
          id="email" 
          label="E-mail"
          value={emailState.value} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
          />
        <Input 
          type="password" 
          id="password" 
          label="Password"
          value={passwordState.value} 
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
          />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
