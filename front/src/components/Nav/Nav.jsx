import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.svg"
import styles from "./Nav.module.scss";
//!----------------------------------------------------+/


export default function Nav(props) {


    return (
        <div className={styles.navContainer}>

            <div className={styles.logo}>
                <Link to={'/home'}>
                    <img src={Logo} alt="logo" width={200} />
                </Link>
                
            </div>

            <div className={styles.secondSection}>
                <div className={styles.wrapperItems1}>
                    <Link to={'/home'} className={styles.linkNav}>
                        <span className={styles.itemNav} id="home">Home</span>
                    </Link>


                    <Link to={'/favourites'} className={styles.linkNav}>
                        <span className={styles.itemNav} id="logout">Favs</span>
                    </Link>
                </div>
                
                <div className={styles.searchNav}>
                    <SearchBar onSearch={props.onSearch}/>
                </div>


                <div className={styles.wrapperItems2}>
                    <Link to={'/about'} className={styles.linkNav}>
                        <span className={styles.itemNav} id="about">About</span>
                    </Link>
                    <span onClick={props.logout} className={styles.itemNav} id="logout">Logout</span>
                </div>

            </div>

        </div>
    )
}