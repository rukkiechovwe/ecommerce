import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import ProductImage from "../appImages";
import * as S from "./styles";

const CartCard = ({ cartItem }) => {
  const [item, setItem] = useState(cartItem);
  const { cartDispatch } = useContext(CartContext);

  return (
    <S.CartCard>
      <S.Container>
        <S.ImageDiv height="70px" width="70px">
          <ProductImage src={item.image} />
        </S.ImageDiv>
        <S.Details>
          <S.Name>{item.title}</S.Name>
          <S.Price>NGN{item.price}</S.Price>
        </S.Details>
      </S.Container>
      <S.OtherContainer>
        <S.QuantityContainer>
          <S.Button
            onClick={() => {
              if (item.quantity > 1) {
                let q = item.quantity;
                const updated = { ...item, quantity: --q };
                setItem(updated);
                cartDispatch({
                  type: "update_quantity",
                  item: updated,
                });
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
          <S.Quantity>{item.quantity}</S.Quantity>

          <S.Button
            onClick={() => {
              let q = item.quantity;
              const updated = { ...item, quantity: ++q };
              setItem(updated);
              cartDispatch({
                type: "update_quantity",
                item: updated,
              });
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
        <S.Delete
          width="30px"
          height="30px"
          onClick={() => {
            cartDispatch({
              type: "remove",
              item: item,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ff0606"
            width="20px"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </S.Delete>
      </S.OtherContainer>
    </S.CartCard>
  );
};

export default CartCard;
