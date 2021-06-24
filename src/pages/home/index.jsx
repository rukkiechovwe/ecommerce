import * as S from "./styles";
import Products from "../../components/products";
import Nav from "../../components/nav";

const Home = () => {
  return (
    <>
      <Nav />
      <S.Container>
        <Products />
      </S.Container>
    </>
  );
};

export default Home;
