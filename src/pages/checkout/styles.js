import styled from "styled-components";

export const GenContainer = styled.div`
  padding: 30px 15px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    padding: 40px;
  }
`;
export const Container = styled.div`
  padding: 30px 15px;
  width: 100%;
  background: white;
  @media only screen and (min-width: 768px) {
    padding: 40px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0 0;
  @media only screen and (min-width: 768px) {
    padding: 40px;
    display: flex;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 65%;
  }
`;
export const Summary = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 35%;
  }
`;
export const FormContainer = styled.form``;
export const FormGroup = styled.div`
  width: 100%;

  @media only screen and (min-width: 450px) {
    display: flex;
  }
`;

export const HeadingText = styled.h3`
  font-size: 1.5rem;
`;
export const TitleText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: capitalize;
`;
