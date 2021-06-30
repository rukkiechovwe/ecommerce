import * as S from "./styles";
import React from "react";

const ProductImage = ({src }) => {
  return <S.Img src={src} alt={src}/>;
};

export default ProductImage;
