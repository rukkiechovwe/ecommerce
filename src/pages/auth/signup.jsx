import React, { useState } from "react";
import { auth, firestore, gProvider } from "../../firebase";
import { useHistory } from "react-router";
import { SignupValidation } from "./validate";

import Button from "../../common/button";
import ProductImage from "../../common/appImages";
import Onboarding1 from "../../assets/images/happy-shopping.svg";

import InputField from "../../common/input";
import * as S from "./styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [authErr, setAuthErr] = useState("");
  const history = useHistory();

  const signUpUser = async (n, e, p) => {
    setAuthErr("");
    auth
      .createUserWithEmailAndPassword(e, p)
      .then(async (uc) => {
        await firestore.collection("users").doc(uc.user.uid).set({
          name: n,
          email: e,
          id: uc.user.uid,
        });
        localStorage.setItem("user_id", uc.user.uid);
        history.push(`/account`);
      })
      .catch((error) => {
        console.log("sinup error:", error.message);
        setAuthErr(error.message);
      });
  };

  const signupWithGoogle = (e) => {
    e.preventDefault();
    setErrors({});
    auth
      .signInWithPopup(gProvider)
      .then(async (result) => {
        console.log(result);
        await firestore.collection("users").doc(result.user.uid).set({
          name: result.user.displayName,
          email: result.user.email,
          id: result.user.uid,
        });
        localStorage.setItem("user_id", result.user.uid);
        history.push(`/account`);
      })

      .catch((error) => {
        console.log(error);
        setAuthErr(error.message);
      });
  };

  return (
    <S.Container>
      <S.Onboarding>
        <S.ImgContainer>
          <ProductImage src={Onboarding1} />
        </S.ImgContainer>
        <S.Title>Hello There!</S.Title>
        <S.Text>Please, create an account</S.Text>
      </S.Onboarding>
      <S.FormContainer>
        <S.LoginText>Create An Account</S.LoginText>
        <p>{authErr}</p>
        <S.AuthForm>
          <InputField
            title="Name"
            name="fullName"
            type="text"
            placeholder="john doe"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            error={errors.fullName}
          />

          <InputField
            title="Email"
            type="email"
            name="email"
            placeholder="hello@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={errors.email}
          />
          <InputField
            title="Password"
            type="password"
            name="password"
            placeholder="minimum of 8 characters"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={errors.password}
          />

          <Button
            onClick={(e) => {
              e.preventDefault();
              let errors = SignupValidation(userName, email, password);
              if (Object.keys(errors).length === 0) {
                signUpUser(userName, email, password);
              } else {
                setErrors(errors);
              }
            }}
            textTransform="uppercase"
          >
            Sign up
          </Button>
          <S.Login>OR SIGN UP WITH</S.Login>
          <Button
            onClick={(e) => {
              signupWithGoogle(e);
            }}
            background="#d33d2b"
            textTransform="uppercase"
          >
            Google
          </Button>
          <S.Login>
            Already have an account?
            <S.NavLink to="/sign-in"> Login here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
