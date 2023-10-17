import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.svg"
import styles from "./Nav.module.scss";
//!----------------------------------------------------+/


export default function Nav(props) {


    return (
        <div className={styles.navContainer}>

            <div className={styles.logo}>
                <img src={Logo} alt="logo" width={200} />
            </div>

            <div className={styles.navigator}>
                <div className={styles.searchNav}>
                    <SearchBar onSearch={props.onSearch}/>
                </div>

                <div className={styles.wrapperItems}>
                    <Link to={'/home'} className={styles.linkNav}>
                        <span className={styles.itemNav} id="home">Home</span>
                    </Link>

                    <Link to={'/about'} className={styles.linkNav}>
                        <span className={styles.itemNav} id="about">About</span>
                    </Link>
                </div>

                <div className={styles.wrapperItems}>
                    <span onClick={props.logout} className={styles.itemNav} id="logout">Logout</span>
                </div>

            </div>

        </div>
    )
}