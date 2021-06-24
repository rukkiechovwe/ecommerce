import ProductImage from "../avatar";
import * as S from "./styles";

const ProductCard = ({ onClick, title, price, avatar }) => (
  <S.ProductCard onClick={onClick}>
    <S.ImageDiv height="150px" width="100%">
      <ProductImage src={avatar} />
    </S.ImageDiv>
    <S.Name>{title}Solar Panels</S.Name>
    <S.Price>${price}</S.Price>
  </S.ProductCard>
);

export default ProductCard;
