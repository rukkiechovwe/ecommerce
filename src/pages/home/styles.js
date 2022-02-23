import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2rem 3rem;
  color: #222;
  display:flex;
  flex-direction:row;
  justify-content: center;
  flex-wrap: wrap;
  ::after {
    content: "";
    flex: auto;
    @media (min-width: 400px) {
      padding: 2rem 1rem 3rem;
      justify-content: space-between;
    }
`;
export const Wrapper = styled.div`
  width: 100%;
`;

export const Hero = styled.div`
  //   margin: 2rem 3rem 3rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: auto;
  background: #fff;
  border-radius: 8px;
  //   box-shadow: 0px 2px 6px #5e5d5d0a;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;
export const HeroText = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-right: 1rem;
  }
`;
export const Heading = styled.h1`
  font-size: 2.575rem;
  line-height: 2.1625rem;
  padding: 1rem 0;
  color: #222;
  width: 90%;
  @media only screen and (min-width: 600px) {
    font-size: 4.075rem;
    line-height: 3.5625rem;
  }
`;
export const Para = styled.p`
  width: 70%;
  font-size: 1rem;
  padding: 1rem 0;
  @media only screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const Imgwrapper = styled.div`
  width: 100%;
  display: none;
  @media only screen and (min-width: 768px) {
    width: 50%;
    display: block;
  }
`;
