import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import ProductCard from "../../common/productCard";
import { ProductContext } from "../../context/productContext";

const Products = () => {
  const { item } = useContext(ProductContext);
  const history = useHistory();
  return item.products.length === 0 ? (
    <center>loading...</center>
  ) : (
    item.products.map((item) => (
      <ProductCard
        title={item.title}
        price={item.price}
        image={item.image}
        key={item.id}
        onClick={() => {
          // console.log(item);
          history.push(`/${item.title}`, { item: item });
        }}
      />
    ))
  );
};

export default Products;
