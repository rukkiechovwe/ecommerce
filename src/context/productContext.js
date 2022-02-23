import React, { useEffect, useReducer } from "react";

export const ProductContext = React.createContext();
const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "transformProduct":
      return {
        ...state,
        products: transformProduct(action.payload),
      };
    default:
      throw new Error("Something went wrong");
  }
};

function transformProduct(products) {
  return products.map((product) => {
    return { ...product, quantity: 1 };
  });
}

function ProductContextProvider({ children }) {
  const url = "https://fakestoreapi.com/products";
  const [item, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      //   console.log(data);
        dispatch({ type: "transformProduct", payload: data });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ProductContext.Provider value={{ item: item }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
