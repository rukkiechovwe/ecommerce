import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  @media only screen and (min-width: 56px) {
    width: 500px;
  }
  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;
export const TotalText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;
