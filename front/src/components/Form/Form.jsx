import { useState } from "react";
import React from 'react'
import validate from "../validation";
import './form.css'
//!----------------------------------------------------+/

const Form = ({ login }) => {

    const[userData, setUserData] = useState({
        email: "",
        password: "",
      });
    
      const[errors, setErrors] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property]: value});
    
        setErrors(validate({...userData, [property]: value}, setErrors, errors));
      };
     
      const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
      };

      const [inputType, setInputType] = useState('password')

      const viewPass = () => {
        const newType = inputType === 'password' ? 'text' : 'password'
        setInputType(newType)
      }

    return ( 
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                        <input type="text"  name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                    
                    <span>{errors.email}</span>
                </div>
                
                <div>
                    <label htmlFor="password"></label>
                        <button type="button" onClick={viewPass}>👁️</button>
                        <input type={inputType} name="password" value={userData.password} onChange={handleChange} placeholder="Password"/>
                    <span>{errors.password}</span>
                </div>

                <button type="submit">👉🏼Submit👈🏼</button>
            </form>
     );
}

export default Form;