import axios from 'axios';
import { useState, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';
//!----------------------------------------------------+/
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form';
import Favourites from './components/Favourites/Favourites';
//!----------------------------------------------------+/


function App() {

   const APIKEY = 'pi-thiagojmartins'
   const EMAIL = ''
   const PASSWORD = ''
   //! disabled creddentials
   // const EMAIL = 'thiagodev.martins@gmail.com'
   // const PASSWORD = 'Thiago228'

   const [ access, setAccess ] = useState(false)
   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const dispatch = useDispatch()


   const onSearch = (id) => {

      axios(
         `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
      ).then(({data}) => {


            if (data.name) {
               const characterExists = characters.filter((char) => char.id === data.id)
               if (characterExists.length === 0) setCharacters(oldChars => [...oldChars, data]);
               else window.alert('This character has already been added')
            }else {
               window.alert('Not character found with this ID')

            }
            
         }

      ).catch(error => window.alert(error.message))
   }

   const onClose = (id) => {
      dispatch(removeFav(id));
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

  function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD){
          setAccess(true)
          navigate('/home')
      }else{
         alert('Incorrect email or password, verify your data')
      }
   }

   function logout(event){
      setAccess(false)
      navigate('/')
   }

   useMemo(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
   
          {pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/> }
        
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/favourites' element={ <Favourites />} />
            <Route path='/detail/:id' element={ <Detail /> } />
            <Route path='*' element={ <Error /> } />
            <Route path='/' element={ <Form login={login}/> } />
         </Routes> 
         

      </div>
   );
}

export default App;
