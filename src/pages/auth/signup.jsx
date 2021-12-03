import React, { useState } from "react";
import { auth, firestore } from "../../firebase";
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
  const history = useHistory();

  const signUpUser = async (n, e, p) => {
    auth
      .createUserWithEmailAndPassword(e, p)
      .then(async (uc) => {
        await firestore.collection("users").doc(uc.user.uid).set({
          name: n,
          email: e,
          id: uc.user.uid,
        });
        history.push(`/account/${e}`, { user: e });
      })
      .catch((error) => {
        console.log("sinup error:", error.message);
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
        <S.LoginText>Create an Account</S.LoginText>
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
                signUpUser(userName,email, password);
              } else {
                setErrors(errors);
              }
            }}
          >
            Signup
          </Button>
          <S.Login>
            Already have an account?
            <S.NavLink to="/login"> Login here</S.NavLink>
          </S.Login>
        </S.AuthForm>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
