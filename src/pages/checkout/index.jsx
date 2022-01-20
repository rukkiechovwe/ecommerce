import React, { useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";

import Nav from "../../components/nav";
import { CartContext } from "../../context/cartContext";
import Button from "../../common/button";
import InputField from "../../common/input";

function Checkout() {
  const history = useHistory();
  let isLoggedIn = localStorage.getItem("user_id");
  if (!isLoggedIn) {
    history.push("/sign-in");
  }

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <Nav />
      <S.GenContainer>
        <S.Container>
          <S.HeadingText>Checkout</S.HeadingText>
          <S.Wrapper>
            <S.InfoContainer>
              <S.TitleText>Billing Details</S.TitleText>
              <S.FormContainer>
                <S.FormGroup>
                  <InputField
                    margin="1rem 0.6rem 1rem 0"
                    width="50%"
                    title="First Name"
                    type="text"
                    placeholder="first name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <InputField
                    width="50%"
                    title="Last Name"
                    type="text"
                    placeholder="last name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <InputField
                    width="100%"
                    title="Address"
                    type="text"
                    placeholder="building number and street name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <InputField
                    margin="1rem 0.6rem 1rem 0"
                    width="50%"
                    title="State"
                    type="text"
                    placeholder="state of residence"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <InputField
                    width="50%"
                    title="Country"
                    type="text"
                    placeholder="country of residence"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </S.FormGroup>
              </S.FormContainer>

              <Button width="200px">Next</Button>
            </S.InfoContainer>
            <S.Summary>
              <S.TitleText>summary</S.TitleText>
            </S.Summary>
          </S.Wrapper>
        </S.Container>
      </S.GenContainer>
    </>
  );
}

export default Checkout;
