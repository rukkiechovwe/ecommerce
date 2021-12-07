import React, { useReducer } from "react";

export const CartContext = React.createContext();

const initialState = {
  total: 0,
  items: [],
  price: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      let addItems = state.items.concat(action.item);
      return {
        ...state,
        items: addItems,
        total: calculateTotalCount(addItems),
        price: calculateTotal(addItems),
      };
    case "remove":
      let removeItems = state.items.filter(
        (item, id) => item.id !== action.item.id
      );
      return {
        ...state,
        items: removeItems,
        total: calculateTotalCount(removeItems),
        price: calculateTotal(removeItems),
      };

    case "update_quantity":
      const updateItems = updateQuantity(state.items, action.item);
      return {
        ...state,
        items: updateItems,
        price: calculateTotal(updateItems),
        total: calculateTotalCount(updateItems),
      };

    default:
      throw new Error("Something went wrong");
  }
};

const calculateTotal = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const price = items[i].price * items[i].quantity;
    total += price;
  }
  return total;
};

const calculateTotalCount = (items) => {
  return items.reduce((a, c) => a + c.quantity, 0);
};

const updateQuantity = (items, item) => {
  return items.map((e) => {
    if (e.id === item.id) return item;
    return e;
  });
};

const CartContextProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cartDispatch: cartDispatch,
        cartTotal: cart.total,
        cartItems: cart.items,
        SubTotal: cart.price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
