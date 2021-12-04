import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./styles";
import Button from "../../common/button";
import ProductImage from "../../common/appImages";
import Nav from "../../components/nav";
import { CartContext } from "../../context/cartContext";

const ProductDetails = () => {
  const productData = useLocation().state.item;
  const cartContext = useContext(CartContext);
  const [product, setProduct] = useState(productData);
  return (
    <>
      <Nav />
      <S.Container>
        <S.ImageDiv width="50%">
          <ProductImage src={productData.image} />
        </S.ImageDiv>
        <S.Details>
          <S.Category>{productData.category}</S.Category>
          <S.Name>{productData.title}</S.Name>
          <S.Price>${productData.price}</S.Price>
          <S.Desc>{productData.description}</S.Desc>
          <S.QuantityContainer>
            <S.Button
              onClick={() => {
                if (product.quantity > 1) {
                  let q = product.quantity;
                  setProduct({ ...product, quantity: --q });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H6"
                />
              </svg>
            </S.Button>

            <S.Quantity>{product.quantity}</S.Quantity>
            <S.Button
              onClick={() => {
                let q = product.quantity;
                setProduct({ ...product, quantity: ++q });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </S.Button>
          </S.QuantityContainer>
          <Button
            onClick={() => {
              let isInCart = false;
              for (let i = 0; i < cartContext.cartItems.length; i++) {
                const cart = cartContext.cartItems[i];
                console.log(cart);
                if (product.title === cart.title) {
                  isInCart = true;
                  break;
                }
              }
              if (!isInCart) {
                cartContext.cartDispatch({
                  type: "add",
                  item: product,
                });
                alert("Added to cart");
              } else {
                alert("Already in cart");
              }
            }}
          >
            ADD TO CART
          </Button>
        </S.Details>
      </S.Container>
    </>
  );
};

export default ProductDetails;
