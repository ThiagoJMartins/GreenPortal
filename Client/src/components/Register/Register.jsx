import { useState } from "react";
import { Link } from "react-router-dom";
//!----------------------------------------------------+/
import validate from "../../utils/validation";
import styles from "./Register.module.scss";
//!----------------------------------------------------+/

const Register = ({ register }) => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({ ...userData, [property]: value });

		setErrors(validate({ ...userData, [property]: value }, setErrors, errors));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		register(userData);
	};

	return (
		<div className={styles.form}>
			<form className={styles.container}>
				<div>
					<img className={styles.logo} src="../../public/portalB.png" alt="" />
				</div>
				<label>Email</label>
				<input
					className={styles.entries}
					placeholder="Email"
					type="text"
					value={userData.email}
					name="email"
					onChange={handleChange}
				/>
				<span className={styles.warning}>{errors.email}</span>

				<label>Password</label>
				<input
					className={styles.entries}
					placeholder="Password"
					type="password"
					value={userData.password}
					name="password"
					onChange={handleChange}
				/>
				<span className={styles.warning}>{errors.password}</span>
				<br />
				<button className={styles.boton} type="submit" onClick={handleSubmit}>
					Signup
				</button>
				<br />
				<Link to="/" className={styles.linkNav}>
					<span className={styles.linkLogin}>Login</span>
				</Link>
			</form>
		</div>
	);
};

export default Register;
