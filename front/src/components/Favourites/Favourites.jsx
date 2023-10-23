import { connect } from "react-redux";
import { Card } from "../Card/Card";
import styles from './Favourites.module.scss';

export const Favourites = ({myFavourites}) => {
    return (
        <div className={styles.cardsContainer}>
            {myFavourites?.map((fav) => (
                <Card
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin}
                image={fav.image}
                id={fav.id}
                />
            ))}
        </div>
    );
}

export const mapStateToProps = (state) => {
    return{
        myFavourites: state.myFavourites
    }
}

export default connect(mapStateToProps, null)(Favourites)