import styled from "styled-components";

export const CartCard = styled.div`
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid hsl(0, 0%, 90.2%);
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const ImageDiv = styled.div`
  padding: 0 1rem 0 0;
  height: 50px;
  width: 50px;
  @media only screen and (min-width: 450px) {
    height: ${(props) => (props.height ? props.height : "100%")};
    width: ${(props) => (props.width ? props.width : "100%")};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Name = styled.p`
  font-weight: 600;
  padding: 0 0 8px;
  width: 100%;
  width: 120px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media only screen and (min-width: 320px) {
    width: 170px;
  }
  @media only screen and (min-width: 450px) {
    width: 250px;
  }
  @media only screen and (min-width: 500px) {
    width: 320px;
  }
  @media only screen and (min-width: 768px) {
    width: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 170px;
  }
`;
export const Price = styled.span`
  padding: 3px 0;
`;
export const Quantity = styled.p`
  font-size: 18px;
`;
