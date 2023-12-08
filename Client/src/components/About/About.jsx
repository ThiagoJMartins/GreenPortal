import styles from "./About.module.scss";
//!----------------------------------------------------+/

function About() {
	return (
		<div className={styles.About}>
			<div className={styles.subabout}>
				<h1 className={styles.h1ab}>About</h1>
				<h2 className={styles.h2ab}> Made by Thiago Martins (Ares WebDev)</h2>
				<h3 className={styles.h3ab}>
					This project is a web application that allows users to navigate
					through the characters of the animated series <b>"Rick and Morty"</b>{" "}
					and interact with them.
				</h3>
				<h3 className={styles.h3ab}>
					The app uses the <i>Rick and Morty API</i> to get character
					information. This project is part of the SoyHenry bootcamp.
				</h3>
				<h3 className={styles.h3ab}>I hope you to enjoy this website</h3>
				<br />
			</div>
			<div className={styles.techs}>
				<h3 className={styles.h3abT}> Technologies:</h3>
				<div className={styles.divP}>
					<p className={styles.p}>JavaScript</p>
					<p className={styles.p}>React.js</p>
					<p className={styles.p}>Redux</p>
					<p className={styles.p}>Sass/Scss</p>
					<p className={styles.p}>Node.js</p>
					<p className={styles.p}>Express.js</p>
					<p className={styles.p}>SQL</p>
					<p className={styles.p}>Sequelize</p>
					<p className={styles.p}>PostgreSQL</p>
				</div>
			</div>
		</div>
	);
}

export default About;
