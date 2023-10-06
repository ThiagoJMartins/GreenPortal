import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
//!----------------------------------------------------+/
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form';
//!----------------------------------------------------+/


function App() {

   const APIKEY = 'pi-thiagojmartins'
   const { pathname } = useLocation()
   const [ access, setAccess ] = useState(false)
   const EMAIL = 'thiagodev.martins@gmail.com'
   const PASSWORD = 'Thiago228'
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate()

   const onSearch = (id) => {

      axios(
         `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
      ).then(({data}) => {

            if (data.name) {
               setCharacters(oldChars => [...oldChars, data]);
            }else {
               window.alert('Not character found with this ID')

            }
            
         }

      ).catch(error => window.alert(error.message))
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   function getRandomCharacter() {
      const totalChars = 826
      const randomId = Math.floor(Math.random() * totalChars) + 1
      onSearch(randomId)
   }

  function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD){
          setAccess(true)
          navigate('/home')
      }
   }

   function logout(event){
      setAccess(false)
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
   
          {pathname !== '/' && <Nav onSearch={onSearch} getRandomCharacter={ getRandomCharacter } logout={logout}/> }
        
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/detail/:id' element={ <Detail /> } />
            <Route path='*' element={ <Error /> } />
            <Route path='/' element={ <Form login={login}/> } />
         </Routes> 
         

      </div>
   );
}

export default App;
