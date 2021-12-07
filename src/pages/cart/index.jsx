import React, { useContext } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";

import Nav from "../../components/nav";
import CartCard from "../../common/cartCard";
import { CartContext } from "../../context/cartContext";
import Button from "../../common/button";

function CartPage() {
  const history = useHistory();
  const { cartItems, cartTotal, SubTotal } = useContext(CartContext);
 
  return (
    <>
      <Nav />
      <S.Wrapper>
        {cartTotal > 0 ? (
          <>
            <S.Container>
              <S.TotalText>
                <p>{cartTotal} Items</p>
                <p>Total: {SubTotal}</p>
              </S.TotalText>
              {cartItems.map((item) => (
                <CartCard cartItem={item} key={item.id} />
              ))}
              <Button>Checkout</Button>
            </S.Container>
          </>
        ) : (
          <div className="no_cart">
            <p>No Item In Cart</p>
            <Button width="300px" onClick={() => history.push("/")}>
              Continue Shopping
            </Button>
          </div>
        )}
      </S.Wrapper>
    </>
  );
}

export default CartPage;
