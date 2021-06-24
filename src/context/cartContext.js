import React, { useReducer } from "react";

export const CartContext = React.createContext();

const initialState = {
  total: 0,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: state.items.concat(action.item),
        total: state.total + 1,
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item, id) => id !== action.id),
        total: state.total - 1,
      };

    default:
      throw new Error("Something went wrong");
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        cartDispatch: cartDispatch,
        cartTotal: cart.total,
        cartItems: cart.items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
