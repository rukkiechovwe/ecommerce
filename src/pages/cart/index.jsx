import React, { useContext } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";

import Nav from "../../components/nav";
import CartCard from "../../common/cartCard";
import { CartContext } from "../../context/cartContext";
import Button from "../../common/button";

function CartPage() {
  const history = useHistory();
  const cartContext = useContext(CartContext);

  return (
    <>
      <Nav />
      <S.Wrapper>
        {cartContext.cartTotal > 0 ? (
          <>
            <S.Container>
              <S.TotalText>
                <p>{cartContext.cartTotal} Items</p>
                <p>Total:</p>
              </S.TotalText>
              {cartContext.cartItems.map((product) => (
                <CartCard productData={product} key={product.id} />
              ))}
              <Button>Checkout</Button>
            </S.Container>
          </>
        ) : (
          <div className="no_cart">
            <p>No Item In Cart</p>
            <Button width="300px" onClick={() => history.push("/")}>Continue Shopping</Button>
          </div>
        )}
      </S.Wrapper>
    </>
  );
}

export default CartPage;
