import { useState } from 'react'
import validate from "../../utils/validation";
import styles from './form.module.scss'
//!----------------------------------------------------+/

const Form = ({ login }) => {

    const[userData, setUserData] = useState({
        email: "",
        password: "",
      });
    
      const[errors, setErrors] = useState({});
    
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
            <form className="form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"  name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                    <br />
                    <span>{errors.email}</span>
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={inputType} name="password" value={userData.password} onChange={handleChange} placeholder="Password"/>
                    <button type="button" onClick={viewPass}>👁️</button>
                    <br />
                    <span>{errors.password}</span>
                </div>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
     );
}

export default Form;