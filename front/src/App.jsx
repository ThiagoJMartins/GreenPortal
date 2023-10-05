import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios'

function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-thiagojmartins`).then(
         ({data}) => {
            if (data.name) {
               setCharacters(oldChars => [...oldChars, data]);
            }else {
               window.alert('No se encontró personaje con este ID')
            }
         }
      ).catch(error => window.alert(error.message))
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <div class="bg-image"></div>
         <Nav onSearch={onSearch} />
         <hr/>
         <Cards characters={characters} onClose={onClose} />
         <hr/>
      </div>
   );
}

export default App;
