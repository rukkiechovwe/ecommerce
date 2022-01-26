import React, { useReducer } from "react";
import { firestore } from "../firebase";

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
      updateFirestoreCart(
        addItems,
        calculateTotalCount(addItems),
        calculateTotal(addItems)
      );
      return {
        ...state,
        items: addItems,
        total: calculateTotalCount(addItems),
        price: calculateTotal(addItems),
      };

    case "remove":
      let removeItems = state.items.filter(
        (item) => item.id !== action.item.id
      );
      updateFirestoreCart(
        removeItems,
        calculateTotalCount(removeItems),
        calculateTotal(removeItems)
      );
      return {
        ...state,
        items: removeItems,
        total: calculateTotalCount(removeItems),
        price: calculateTotal(removeItems),
      };

    case "update_quantity":
      const updateItems = updateQuantity(state.items, action.item);
      updateFirestoreCart(
        updateItems,
        calculateTotalCount(updateItems),
        calculateTotal(updateItems)
      );
      return {
        ...state,
        items: updateItems,
        price: calculateTotal(updateItems),
        total: calculateTotalCount(updateItems),
      };

    case "clear":
      updateFirestoreCart([], 0, 0);
      return {
        ...state,
        total: 0,
        items: [],
        price: 0,
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

const updateFirestoreCart = (items, total, price) => {
  const user_id = localStorage.getItem("user_id");

  return firestore
    .collection("users")
    .doc(user_id)
    .update({
      cartItems: {
        items: items,
        total: total,
        price: price,
      },
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

const getFireStoreCart = ()=>{

}

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
