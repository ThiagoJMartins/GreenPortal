import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
//!----------------------------------------------------+/


export default function Nav(props) {

    function handleRandom(){
        props.getRandomCharacter()
    }

    return (
        <div>
            <Link to={'/home'}>
                <button>🏠Home</button>
            </Link>
            
            <Link to={'/about'}>
                <button>❓About</button>
            </Link>

            <button onClick={props.logout}>⤴️Logout</button>

            <hr />

            <SearchBar onSearch={props.onSearch}/>
            <button onClick={handleRandom}>Random Character🎲</button>

        </div>
    )
}