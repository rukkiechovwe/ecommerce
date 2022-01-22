import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  @media only screen and (min-width: 768px) {
    width: 65%;
    padding: 0 30px 0 0;
  }
`;

export const FormContainer = styled.form`
  padding: 10px 0 0;
`;
export const FormGroup = styled.div`
  width: 100%;

  @media only screen and (min-width: 450px) {
    display: flex;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const HeadingText = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const TitleText = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  text-transform: capitalize;
  border-bottom: 1px solid hsl(0, 0%, 90.2%);
  padding: 0 0 10px;
}
`;
