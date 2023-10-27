import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import Card from "../Card/Card";
import styles from './Favourites.module.scss';

const Favourites = () => {

    const myFavourites = useSelector((state) => state.myFavourites)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const [aux, setAux] = useState(false)

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="default">--------</option>
                <option value="A">Ascendant</option>
                <option value="D">Descendant</option>
            </select>
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
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
                    key={fav.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favourites