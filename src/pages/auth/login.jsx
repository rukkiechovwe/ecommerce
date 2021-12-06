import React, { useState } from "react";
import { useHistory } from "react-router";
import * as S from "./styles";
import { auth, gProvider } from "../../firebase";
import { LoginValidation } from "./validate";

import InputField from "../../common/input";
import Button from "../../common/button";
import ProductImage from "../../common/appImages";
import Onboarding1 from "../../assets/images/happy-shopping.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const signInUser = (e, p) => {
    auth
      .signInWithEmailAndPassword(e, p)
      .then((userCredential) => {
        console.log("you are signed in", userCredential.user.email);
        history.push(`/account`);
      })
      .catch((error) => {
        console.log("Error message: ", error.message);
      });
  };

  const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(gProvider);
      console.log(response);
      history.push(`/account`);
    } catch (error) {
      console.log(error);
    }
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
            error={errors.email}
          />
          <InputField
            title="Password"
            type="password"
            placeholder="minimum of 6 characters"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={errors.password}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              let errors = LoginValidation(email, password);
              if (Object.keys(errors).length === 0) {
                signInUser(email, password);
              } else {
                setErrors(errors);
              }
            }}
          >
            Login
          </Button>
          <S.Login>OR</S.Login>
          <Button
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
          >
            Signin with Google
          </Button>
          <S.Login>
            Don't have an account?
            <S.NavLink to="/signup"> Signup here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
