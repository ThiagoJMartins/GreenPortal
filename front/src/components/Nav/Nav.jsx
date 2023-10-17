import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
//!----------------------------------------------------+/


export default function Nav(props) {

    function handleRandom(){
        props.getRandomCharacter()
    }

    return (
        <div className={styles.navContainer}>

            <div className={styles.logo}>
                <img src="../../public/rickandmorty.png" alt="logo" />
            </div>

            <div className={styles.navigator}>
                <Link to={'/home'}>
                    <button className="button" id="home">Home</button>
                </Link>

                <Link to={'/about'}>
                    <button className="button" id="about">About</button>
                </Link>

                <button onClick={props.logout} className="button" id="logout">Logout</button>

                <SearchBar onSearch={props.onSearch}/>
                <button onClick={handleRandom} className="button" id="random">Random Character</button>
                
            </div>
        </div>
    )
}