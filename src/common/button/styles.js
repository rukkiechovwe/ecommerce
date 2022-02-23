import styled from "styled-components";
export const Button = styled.button`
  font-weight: 500;
  font-family: 'Mabry Pro';
  font-size: inherit;
  margin: 1rem 0;
  padding: 12px;
  width: ${(props) => props.width || "100%"};
  border: none;
   border-radius: 5px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-transform: ${(props) => props.textTransform || "capitalize"};
    display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background ||
    `hsla(163,53%,46%,0.8);
	// background: linear-gradient(
	// 	225deg,
	// 	hsla(184, 50%, 45%, 1) 0%,
	// 	hsla(170, 51%, 46%, 1) 41%,
	// 	hsla(163, 53%, 46%, 0.8) 100%
	// );
	// background: -moz-linear-gradient(
	// 	225deg,
	// 	hsla(184, 50%, 45%, 1) 0%,
	// 	hsla(170, 51%, 46%, 1) 41%,
	// 	hsla(163, 53%, 46%, 0.8) 100%
	// );
	// background: -webkit-linear-gradient(
	// 	225deg,
	// 	hsla(184, 50%, 45%, 1) 0%,
	// 	hsla(170, 51%, 46%, 1) 41%,
	// 	hsla(163, 53%, 46%, 0.8) 100%
	// );
   `};

}
`;
