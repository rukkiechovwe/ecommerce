import React, { useState } from "react";
import * as S from "./styles";
import PaymentModal from "../../components/paymentModal";

import { BillingDetailsValidation } from "./validate";

import Button from "../../common/button";
import InputField from "../../common/input";

function BillingInformation() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [method, setMethod] = useState("cash");

  const submit = (e) => {
    e.preventDefault();
    setErrors({});
    let err = BillingDetailsValidation(
      firstName,
      lastName,
      address,
      state,
      country,
      method
    );
    if (Object.keys(err).length === 0) {
      setPaymentModal(true);
    } else {
      setErrors(err);
    }
  };

  return (
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
            error={errors.firstName}
          />
          <InputField
            width="50%"
            title="Last Name"
            type="text"
            placeholder="last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            error={errors.lastName}
          />
        </S.FormGroup>
        <S.FormGroup>
          <InputField
            width="100%"
            title="Address"
            type="text"
            placeholder="building number, street name..."
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            error={errors.address}
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
              setState(e.target.value);
            }}
            error={errors.state}
          />
          <InputField
            width="50%"
            title="Country"
            type="text"
            placeholder="country of residence"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            error={errors.country}
          />
        </S.FormGroup>
        <S.FormGroup>
          <InputField
            width="50%"
            title="Cash on Delivery"
            checked={method === "cash"}
            type="radio"
            name="cash"
            onChange={(e) => {
              setMethod(e.target.name);
            }}
          />
          <InputField
            width="50%"
            title="Pay with Paystack"
            type="radio"
            name="paystack"
            checked={method === "paystack"}
            onChange={(e) => {
              setMethod(e.target.name);
            }}
          />
        </S.FormGroup>
      </S.FormContainer>
      <S.ButtonWrapper>
        <Button width="200px" onClick={submit}>
          Continue
        </Button>
      </S.ButtonWrapper>

      {paymentModal && (
        <PaymentModal
          method={method}
          firstName={firstName}
          lastName={lastName}
          address={address}
          state={state}
          country={country}
          setPaymentModal={setPaymentModal}
        />
      )}
    </S.InfoContainer>
  );
}

export default BillingInformation;
