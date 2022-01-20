import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 89vh;
	background: #fff;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}
`;
export const ImageDiv = styled.div`
	padding: 0 1rem;
	height: ${(props) => (props.height ? props.height : "100%")};
	width: ${(props) => (props.width ? props.width : "100%")};
	@media only screen and (max-width: 768px) {
		width: 95.5% !important;
		height: 300px;
		padding: 2rem 1rem;
	}
`;
export const Details = styled.div`
	padding: 2rem;
	width: 50%;
	background: #f9f9f9;
	@media only screen and (max-width: 768px) {
		width: 95.5%;
		padding: 2rem 1rem;
	}
`;
export const Category = styled.span`
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
	padding: 0.4rem 1rem;
	border-radius: 30px;
	font-weight: 600;
	text-transform: capitalize;
`;
export const Name = styled.h3`
	font-weight: 600;
	padding: 1rem 0;
   color:#222;
`;
export const Desc = styled.p`
	font-weight: 500;
	padding: 1rem 0;
	width: 100%;
	text-transform: capitalize;
   color: #8a8a8a;
`;
export const Price = styled.span`
	padding: 1rem 0;
	font-size: 1.5rem;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 0;
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
