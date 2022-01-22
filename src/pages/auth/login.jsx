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
  const [authErr, setAuthErr] = useState("");
  const history = useHistory();

  const signInUser = (e, p) => {
    setAuthErr("");
    setErrors({});
    auth
      .signInWithEmailAndPassword(e, p)
      .then((uc) => {
        console.log("you are signed in", uc.user.email);
        localStorage.setItem("user_id", uc.user.uid);
        history.push(`/account`);
      })
      .catch((error) => {
        console.log("Error message: ", error.message);
        setAuthErr(error.message);
      });
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    setAuthErr("");
    setErrors({});

    auth
      .signInWithPopup(gProvider)
      .then((uc) => {
        console.log(uc);
        localStorage.setItem("user_id", uc.user.uid);
        history.push(`/account`);
      })
      .catch((error) => {
        console.log("Error message: ", error.message);
        setAuthErr(error.message);
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
        <S.LoginText>Sign In</S.LoginText>
        <p>{authErr}</p>
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
            // color="black"
            textTransform="uppercase"
          >
            sign in
          </Button>
          <S.Login>OR SIGN IN WITH</S.Login>
          <Button
            onClick={(e) => {
              signInWithGoogle(e);
            }}
            background="#d33d2b"
            textTransform="uppercase"
          >
            Google
          </Button>
          <S.Login>
            Don't have an account?
            <S.NavLink to="/sign-up"> Signup here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
