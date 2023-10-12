import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import './navbar.css'
//!----------------------------------------------------+/


export default function Nav(props) {

    function handleRandom(){
        props.getRandomCharacter()
    }

    return (
        <div className="navbar">

            <Link to={'/home'}>
                <button className="button" id="home">🏠Home</button>
            </Link>

            <Link to={'/about'}>
                <button className="button" id="about">❓About</button>
            </Link>

            <button onClick={props.logout} className="button" id="logout">⤴️Logout</button>

            <hr />

            <SearchBar onSearch={props.onSearch}/>
            <button onClick={handleRandom} className="button" id="random">🎲Random Character🎲</button>

            {/* <img src='../../public/rym-ship.png' alt="rym" className='form-nav-img'/> */}
        </div>
    )
}