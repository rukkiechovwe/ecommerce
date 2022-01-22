import styled from "styled-components";

export const Summary = styled.div`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 35%;
    padding: 0 0 0 30px;
    border-left: 1px solid hsl(0, 0%, 90.2%);
  }
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
export const Total = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(0, 0%, 90.2%);
  padding: 10px 0;
`;
