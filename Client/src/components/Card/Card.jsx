import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//!----------------------------------------------------+/
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.scss";
//!----------------------------------------------------+/

export default function Card({
	onClose,
	name,
	status,
	species,
	gender,
	origin,
	image,
	id,
}) {
	const [isFav, setIsFav] = useState(false);

	const dispatch = useDispatch();
	const myFavourites = useSelector((state) => state.myFavourites);

	const handleFavourite = () => {
		const character = {
			name,
			status,
			species,
			gender,
			origin,
			image,
			id,
		};

		if (isFav) {
			setIsFav(false);
			dispatch(removeFav(id));
		} else {
			setIsFav(true);
			dispatch(addFav(character));
		}
	};

	useEffect(() => {
		myFavourites?.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavourites]);

	return (
		<div className={styles.tarjeta}>
			<div className={styles.botones}>
				{isFav ? (
					<button className={styles.boton2} onClick={handleFavourite}>
						❤️
					</button>
				) : (
					<button className={styles.boton2} onClick={handleFavourite}>
						🤍
					</button>
				)}
				<button className={styles.boton} onClick={() => onClose(id)}>
					X
				</button>
			</div>
			<Link to={`/detail/${id}`}>
				<img className={styles.image} src={image} alt={name} />
			</Link>
			<h2 className={styles.name}>
				{name} | {id}{" "}
			</h2>

			<div className={styles.text}>
				<h4>STATUS | {status}</h4>
				<h4>SPECIES | {species}</h4>
				<h4>GENDER | {gender}</h4>
				<h4>ORIGIN | {origin}</h4>
			</div>
		</div>
	);
}
