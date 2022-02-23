import * as S from "./styles";
import Products from "../../components/products";
import Nav from "../../components/nav";
import Button from "../../common/button";
import hero from "../../assets/images/happy-shopping.svg";

const Home = () => {
  const scrollTo = (id) => {
    if (id !== null) {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Nav />
      <S.Wrapper>
        <S.Hero>
          <S.HeroText>
            <S.Heading>Best deals just for you!</S.Heading>
            <S.Para>
              Shop to get amazing offers and discounts.<br />
              Enjoy your shopping with us!
            </S.Para>

            <Button
              name="submit"
              type="submit"
              onClick={() => scrollTo("product")}
              width="170px"
            >
              Shop Now
            </Button>
          </S.HeroText>

          <S.Imgwrapper>
            <img src={hero} alt="hero.png" width="100%" height="100%" />
          </S.Imgwrapper>
        </S.Hero>
        <S.Container id="product">
          <Products />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Home;
