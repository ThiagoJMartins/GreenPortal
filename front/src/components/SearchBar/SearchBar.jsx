import { useState } from "react";
import styles from "./SearchBar.module.scss"
//!----------------------------------------------------+/


export default function SearchBar(props){

   const[id,setId] = useState('')

   const handleChange = (event) => {
      const eventId = event.target.value
      setId(eventId)
   }

   const handleSearch = (id) =>{
      props.onSearch(id)
      setId('')
   }


  const handleKeyDown = (event) => {
   if (event.key === 'Enter'){
      handleSearch(id)
   }
  }

   return (
      <div className={styles.searchbar}>
         <input 
            className="searchbar-input" 
            type='search' 
            value={id} 
            placeholder='Insert ID' 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
         />
         
         <button className={styles.searchbutton} onClick={() => handleSearch(id)}>🔍</button>
      </div>
   );
}
