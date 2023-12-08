import React from "react";
import styles from "./Error.module.scss";
//!----------------------------------------------------+/

function Error() {
	return (
		<div className={styles.Error}>
			<div className={styles.ErrorMessage}>
				<h2 className={styles.h2}>Error 404</h2>
				<h3 className={styles.h3}>Page not found</h3>
				<img
					className={styles.img}
					src="../../public/error404.gif"
					alt="error404"
				/>
			</div>
		</div>
	);
}

export default Error;
