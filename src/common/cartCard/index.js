import React, { useState } from "react";
import ProductImage from "../appImages";
import * as S from "./styles";

const CartCard = ({ productData}) => {
  const [product, setProduct] = useState(productData);
  return (
    <S.CartCard>
      <S.Container>
      <S.ImageDiv height="100px" width="100px">
        <ProductImage src={product.image} />
      </S.ImageDiv>
      <S.Details>
        <S.Name>{product.title}</S.Name>
        <S.Price>${product.price}</S.Price>
      </S.Details>
      </S.Container>
      <S.QuantityContainer>
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
            <S.Quantity>{product.quantity}</S.Quantity>
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
          </S.QuantityContainer>
    </S.CartCard>
  );
};

export default CartCard;
