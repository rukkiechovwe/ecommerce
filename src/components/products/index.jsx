import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import ProductCard from "../../common/productCard";
import { ProductContext } from "../../context/productContext";

const Products = () => {
  const { item } = useContext(ProductContext);
  const history = useHistory();
  return item.products.length === 0 ? (
    <div className="loader-wrapper">
      <div className="loader">
        <span className="spin spin-1"></span>
        <span className="spin spin-2"></span>
      </div>
      <p className="text text-6">text</p>
    </div>
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
