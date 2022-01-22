import ProductImage from "../appImages";
import * as S from "./styles";

const ProductCard = ({ onClick, title, price, image }) => (
  <S.ProductCard onClick={onClick}>
    <S.ImageDiv height="150px" width="100%">
      <ProductImage src={image} />
    </S.ImageDiv>
    <S.Name>{title}Solar Panels</S.Name>
    <S.Price>NGN{price}</S.Price>
  </S.ProductCard>
);

export default ProductCard;
