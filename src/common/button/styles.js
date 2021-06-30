import styled from "styled-components";
export const Button = styled.button`
	font-weight: 600;
	margin: 1rem 0;
	padding: 10px;
	width: 100%;
	background: ${(props) =>
		props.color ||
		`hsla(184, 50%, 45%, 1);
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
	);`};
	color: ${(props) => (props.color ? "#FF9100" : "#fff")};
`;
