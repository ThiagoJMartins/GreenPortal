import { useState } from "react";
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

   return (
      <div>
         <input type='search' value={id} placeholder='Ingrese un ID' onChange={handleChange}/>
         <button onClick={() => handleSearch(id)}>Agregar</button>
      </div>
   );
}
