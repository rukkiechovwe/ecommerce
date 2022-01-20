import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  width: 100%;
  min-height: 100px;
  position: relative;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px #5e5d5d2b;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 67%;
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;
export const ImageDiv = styled.div`
  padding: 0 1rem 0 0;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 70%;
`;

export const Name = styled.p`
  font-weight: 600;
  padding: 0 0 8px;
  width: 100%;
`;
export const Price = styled.span`
  padding: 3px 0;
`;
export const OtherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  @media only screen and (max-width: 460px) {
    padding-top: 1rem;
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Quantity = styled.span`
  font-size: 1rem;
  margin: 0 15px;
`;
export const Delete = styled.button`
 

  position: absolute;
  right: -48px;
  height: 35px;
  width: 35px;
  background: #ff7f7f54;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  text-align: center;
  background: hsla(184, 50%, 45%, 1);
  background: linear-gradient(
    225deg,
    hsla(184, 50%, 45%, 1) 0%,
    hsla(170, 51%, 46%, 1) 41%,
    hsla(163, 53%, 46%, 0.8) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(184, 50%, 45%, 1) 0%,
    hsla(170, 51%, 46%, 1) 41%,
    hsla(163, 53%, 46%, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(184, 50%, 45%, 1) 0%,
    hsla(170, 51%, 46%, 1) 41%,
    hsla(163, 53%, 46%, 0.8) 100%
  );
  color: #fff;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
`;
