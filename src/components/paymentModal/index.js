import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { XCircle } from "phosphor-react";

import { fieldValue, firestore } from "../../firebase";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";

import SummaryCard from "../../common/summaryCard";
import Button from "../../common/button";

import * as S from "./styles";

const PaymentModal = ({
  method,
  firstName,
  lastName,
  address,
  state,
  country,
  setPaymentModal,
}) => {
  const history = useHistory();
  const { SubTotal, cartItems, cartDispatch } = useContext(CartContext);
  const { userData } = useContext(UserContext);
  const [authErr, setAuthErr] = useState("");
  const [loading, setLoading] = useState(false);

  //   paystack details
  const publicKey = process.env.REACT_APP_PAYSTACK_KEY;
  const amount = 100 * (SubTotal + 100);
  const name = userData.name;
  const email = userData.email;
  const componentProps = {
    email,
    amount,
    publicKey,
    metadata: {
      name,
    },
    text: "Pay to place order",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
      updateOrders();
    },

    onClose: () => alert("Wait! You need this item, don't go!!!!"),
  };
  const updateOrders = () => {
    setAuthErr("");
    setLoading(true);
    const user_id = localStorage.getItem("user_id");

    return firestore
      .collection("users")
      .doc(user_id)
      .update({
        orders: fieldValue.arrayUnion({
          billingDetails: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            state: state,
            country: country,
          },
          items: cartItems,
          time: Date.now(),
        }),
      })
      .then(() => {
        setLoading(false);
        cartDispatch({
          type: "clear",
        });
        history.push("/thank-you");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating orders: ", error);
        setAuthErr(error.message);
      });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Button
          background="transparent"
          color="#222"
          width="auto"
          position={true}
          onClick={() => {
            setPaymentModal(false);
          }}
        >
          <XCircle size={32} />
        </Button>
        <p className="err">{authErr}</p>
        <div>
          {cartItems.map((item) => (
            <SummaryCard cartItem={item} key={item.id} />
          ))}
          <S.Total>
            <span>Total:</span> <span>NGN{SubTotal}</span>
          </S.Total>
          <S.Total>
            <span>Delivery fee:</span>
            <span>NGN100</span>
          </S.Total>
          <S.Total>
            <span>Sub Total:</span> <span>NGN{SubTotal + 100}</span>
          </S.Total>
        </div>
        {method === "paystack" ? (
          <div>
            <S.Button {...componentProps} />
          </div>
        ) : (
          <div>
            <Button
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                updateOrders();
              }}
            >
              {loading ? "please wait..." : " place order"}
            </Button>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default PaymentModal;
