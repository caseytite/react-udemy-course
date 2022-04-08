import React from "react";
import classes from '../Login/Login.module.css';

const Input = (props) => {

const {type,id,label,value,onChange,onBlur,isValid} = props
  return (
    <div
          className={`${classes.control} ${
           isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
  )
}


export default Input