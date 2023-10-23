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


    return ( 
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <form className={styles.container}>
              <label>Email</label>
              <input 
                placeholder="Email"
                type="text"  
                value={userData.email} 
                name="email" 
                onChange={handleChange} 
              />
              <span className={styles.warning}>{errors.email}</span>
              
              <label>Password</label>
              <input 
                placeholder="Password"
                type='password' 
                value={userData.password} 
                name="password" 
                onChange={handleChange} 
              />
              <span className={styles.warning}>{errors.password}</span>

              <button className={styles.boton} type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
     );
}

export default Form;