import React, { useState } from "react";
import ProductImage from "../appImages";
import * as S from "./styles";

const CartCard = ({ cartItem }) => {
  //   const [item, setItem] = useState(cartItem);

  return (
    <S.CartCard>
      <S.Container>
        <S.ImageDiv height="70px" width="70px">
          <ProductImage src={cartItem.image} />
        </S.ImageDiv>
        <S.Details>
          <S.Name>{cartItem.title}</S.Name>
          <S.Price>NGN{cartItem.price}</S.Price>
        </S.Details>
        <S.Quantity>x{cartItem.quantity}</S.Quantity>
      </S.Container>
    </S.CartCard>
  );
};

export default CartCard;
