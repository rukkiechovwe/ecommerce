import styled from "styled-components";
export const Button = styled.button`
  font-weight: 600;
  margin: 1rem 0;
  padding: 10px;
  width: 100%;
  background: ${(props) => props.color || "#6ba368"};
  color: ${(props) => (props.color ? "#FF9100" : "#fff")};
`;
