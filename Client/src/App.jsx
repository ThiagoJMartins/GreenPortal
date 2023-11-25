import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//!----------------------------------------------------+/
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favourites from "./components/Favourites/Favourites";
//!----------------------------------------------------+/

function App() {
  const URL = "http://localhost:3001/rickandmorty/";

  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        const characterExists = characters.filter(
          (char) => char.id === data.id
        );
        if (characterExists.length === 0) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          throw Error("This character has already been added");
        }
      } else {
        throw Error("Not character found with this ID");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => Number(char.id) !== Number(id)));
  };

  async function login({ email, password }) {
    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
