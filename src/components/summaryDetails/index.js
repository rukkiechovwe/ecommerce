import React, { useContext } from "react";
import * as S from "./styles";

import { CartContext } from "../../context/cartContext";

import SummaryCard from "../../common/summaryCard";

function SummaryDetails() {
  const { cartItems, SubTotal } = useContext(CartContext);

  return (
    <S.Summary>
      <S.TitleText>summary</S.TitleText>
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
    </S.Summary>
  );
}

export default SummaryDetails;
