import axios from 'axios';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
//!----------------------------------------------------+/
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
//!----------------------------------------------------+/


function App() {

   const APIKEY = 'pi-thiagojmartins'
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {

      axios(
         `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
      ).then(({data}) => {

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
        
         <Nav onSearch={onSearch} />

         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={ <About /> } />
            <Route path='/detail/:id' element={ <Detail /> } />
            <Route path='*' element={ <Error /> } />
         </Routes> 
         

      </div>
   );
}

export default App;
