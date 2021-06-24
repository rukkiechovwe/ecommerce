import React, { useContext } from "react";
import Nav from "../../components/nav";
import CartCard from "../../common/cartCard";
import { CartContext } from "../../context/cartContext";
import * as S from "./styles";

function CartPage() {
  const cartContext = useContext(CartContext);

  return (
    <>
      <Nav />
      <S.Container>
        {cartContext.cartItems.map((product) => (
          <CartCard productData={product} key={product.id} />
        ))}
      </S.Container>
    </>
  );
}

export default CartPage;
