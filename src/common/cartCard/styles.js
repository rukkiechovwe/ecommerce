import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  padding: 10px;
  width: 70%;
  height: 100px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px #5e5d5d2b;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
`;
export const Container = styled.div`
  display: flex;
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
  width: 55%;
`;

export const Name = styled.p`
  font-weight: 600;
  padding: 0 0 8px;
  width: 100%;
`;
export const Price = styled.span`
  padding: 3px 0;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 460px) {
    padding-top: 1rem;
  }
`;
export const Quantity = styled.span`
  font-size: 1rem;
  margin: 0 15px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  text-align: center;
  background: #6ba368;
  color: #fff;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
`;