import React, { useState } from "react";
import { auth, firestore } from "../../firebase";

import Button from "../../common/button";
import ProductImage from "../../common/appImages";
import Onboarding1 from "../../assets/images/happy-shopping.svg";

import InputField from "../../common/input";
import * as S from "./styles";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const signUpUser = async (e, p, n) => {
		// const x = new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		resolve("");
		// 		console.log("Successful"); // 2
		// 	}, 3000);
		// });
		// x.then((value) => {
		// 	console.log("Promise succesfull"); // 3
		// });
		// console.log("After [Successful] from x"); // 1
		auth
			.createUserWithEmailAndPassword(e, p)
			.then(async (uc) => {
				await firestore.collection("users").doc(uc.user.uid).set({
					name: n,
					email: e,
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<S.Container>
			<S.Onboarding>
				<S.ImgContainer>
					<ProductImage src={Onboarding1} />
				</S.ImgContainer>
				<S.Title>Hello There!</S.Title>
				<S.Text>Please, login to your account</S.Text>
			</S.Onboarding>
			<S.FormContainer>
				<S.LoginText>Create an Account</S.LoginText>
				<S.AuthForm>
					<InputField
						title="Name"
						type="text"
						placeholder="john doe"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
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
							signUpUser(email, password, userName);
						}}
					>
						Signup
					</Button>
				</S.AuthForm>
			</S.FormContainer>
		</S.Container>
	);
};

export default Signup;
