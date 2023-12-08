import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//!----------------------------------------------------+/
import styles from "./Detail.module.scss";
//!----------------------------------------------------+/

function Detail() {
	const APIKEY = "pi-thiagojmartins";
	const { id } = useParams();
	const [character, setCharacter] = useState({});
	const [isOpen, setIsOpen] = useState(false);

	const handleEpisodes = () => {
		setIsOpen(!isOpen);
	};

	const episodeSplitter = (ep) => ep.split("/").pop();

	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			}
		);

		return setCharacter({});
	}, [id]);

	return (
		<div className={styles.detailAbsolute}>
			<div className={styles.detail}>
				{character.name ? (
					<>
						<h2 className={styles.name}>{character.name}</h2>
						<img
							className={styles.image}
							src={character.image}
							alt={character.name}
						/>

						<h4 className={styles.text}>STATUS: {character.status}</h4>
						<h4 className={styles.text}>SPECIES: {character.species}</h4>
						<h4 className={styles.text}>GENDER: {character.gender}</h4>
						<h4 className={styles.text}>ORIGIN: {character.origin.name}</h4>

						<h4 className={styles.text}>LOCATION: {character.location.name}</h4>
						<button className={styles.episodeBtn} onClick={handleEpisodes}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="2.5em"
								viewBox="0 0 640 512"
								fill="white">
								<path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
							</svg>
						</button>

						{isOpen && (
							<div className={styles.episodeBox}>
								<h4 className={styles.episodeText}>EPISODES</h4>
								<div className={styles.episodes}>
									{character.episode.map((ep) => (
										<h6 className={styles.episodeBubble}>
											{episodeSplitter(ep)}
										</h6>
									))}
								</div>
							</div>
						)}
					</>
				) : (
					<h2 className={styles.loading}>Loading...</h2>
				)}
			</div>
		</div>
	);
}

export default Detail;
