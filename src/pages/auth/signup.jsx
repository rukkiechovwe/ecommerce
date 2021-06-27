import React, { useState } from "react";
import { auth, firestore } from "../../firebase";

import Button from "../../common/button";
import InputField from "../../common/input";
import * as S from "./styles";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signUpUser = (e, p) => {
		auth
			.createUserWithEmailAndPassword(e, p)
			.then(async (uc) => {
				await firestore.collection("users").doc(uc.user.uid).set({
					name: "",
					email: e,
				});
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
						signUpUser(email, password);
					}}
				>
					Login
				</Button>
			</S.AuthForm>
		</S.Container>
	);
};

export default Signup;
