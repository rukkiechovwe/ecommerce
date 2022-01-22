import { useContext } from "react";
// import { PaystackButton } from "react-paystack";

import { CartContext } from "../../context/cartContext";
import SummaryCard from "../../common/summaryCard";
import SummaryDetails from "../summaryDetails";
import Button from "../../common/button";

import * as S from "./styles";
import { UserContext } from "../../context/userContext";

const PaymentModal = ({ method }) => {
  const { SubTotal, cartItems } = useContext(CartContext);
  const { userData } = useContext(UserContext);

  const publicKey = "pk_test_6c4989c4eefebff720660dd216bba1b061eabd38";
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
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),

    onClose: () => alert("Wait! You need this item, don't go!!!!"),
  };
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          {cartItems.map((item) => (
            <SummaryCard cartItem={item} key={item.id} />
          ))}
          <S.Total>
            <span>Total:</span> <span>NGN{SubTotal}</span>{" "}
          </S.Total>
          <S.Total>
            <span>Delivery fee:</span>
            <span>NGN100</span>
          </S.Total>
          <S.Total>
            <span>Sub Total:</span> <span>NGN{SubTotal + 100}</span>{" "}
          </S.Total>
        </div>
        {method === "paystack" ? (
          <div>
            <S.Button {...componentProps} />
          </div>
        ) : (
          <div>
            <Button>Place Order</Button>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default PaymentModal;
