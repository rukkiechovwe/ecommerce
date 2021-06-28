import React, { useState } from "react";
import { auth } from "../../firebase";

import InputField from "../../common/input";
import Button from "../../common/button";
import * as S from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signInUser = (e, p) => {
		auth
			.signInWithEmailAndPassword(e, p)
			.then((userCredential) => {
				console.log("you are signed in", userCredential.user.email);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<S.Container>
			<S.AuthForm>
				<InputField
					title="Email"
					type="email"
					placeholder="hello@gmail.com"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<InputField
					title="Password"
					type="password"
					placeholder="minimum of 6 characters"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<Button
					onClick={(e) => {
						e.preventDefault();
						signInUser(email, password);
					}}
				>
					Login
				</Button>
			</S.AuthForm>
		</S.Container>
	);
};

export default Login;
