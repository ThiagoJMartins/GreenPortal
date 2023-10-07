import { useState } from "react";
import './navbar.css'
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
      <div className="searchBar-div">
         {/* <img src="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" alt="" className="nav-img" /> */}
         <input className="searchbar-input" type='search' value={id} placeholder='Insert ID' onChange={handleChange}/>
         <button onClick={() => handleSearch(id)} className="searchbar-button">➕</button>
      </div>
   );
}
