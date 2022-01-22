import React, { useContext, useEffect } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";

import { UserContext } from "../../context/userContext";

import Nav from "../../components/nav";
import SummaryDetails from "../../components/summaryDetails";
import BillingInformation from "../../components/billingInformation";

function Checkout() {
  const history = useHistory();
  const { userState } = useContext(UserContext);

  useEffect(() => {
    if (!userState) {
      history.push("/sign-in");
    }
  }, [userState]);

  return (
    <>
      <Nav />
      <S.GenContainer>
        <S.Container>
          <S.HeadingText>Checkout</S.HeadingText>
          <S.Wrapper>
            <BillingInformation></BillingInformation>
            <SummaryDetails></SummaryDetails>
          </S.Wrapper>
        </S.Container>
      </S.GenContainer>
    </>
  );
}

export default Checkout;
