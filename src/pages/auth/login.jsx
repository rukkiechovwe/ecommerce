import React, { useState } from "react";
import { useHistory } from "react-router";
import * as S from "./styles";
import { auth } from "../../firebase";

import InputField from "../../common/input";
import Button from "../../common/button";
import ProductImage from "../../common/appImages";
import Onboarding1 from "../../assets/images/happy-shopping.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signInUser = (e, p) => {
    auth
      .signInWithEmailAndPassword(e, p)
      .then((userCredential) => {
        console.log("you are signed in", userCredential.user.email);
        history.push(`/${e}`, { user: e });
      })
      .catch((error) => {
        console.log("Error message: ", error.message);
      });
  };

  return (
    <S.Container>
      <S.Onboarding>
        <S.ImgContainer>
          <ProductImage src={Onboarding1} />
        </S.ImgContainer>
        <S.Title>Welcome Back!</S.Title>
        <S.Text>Please, login to your account</S.Text>
      </S.Onboarding>
      <S.FormContainer>
        <S.LoginText>LOGIN</S.LoginText>
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
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
