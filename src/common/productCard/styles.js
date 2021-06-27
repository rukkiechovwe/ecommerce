import styled from "styled-components";

export const ProductCard = styled.div`
	width: 100%;
	margin: 15px 0;
	display: flex;
	flex-direction: column;
	padding: 10px;
	background: #fff;
	border-radius: 8px;
	box-shadow: 0px 2px 10px #5e5d5d2b;
	::after {
		content: "";
		display: block;
		margin-left: 100%;
	}

	@media (min-width: 400px) {
		width: 42%;
		margin: 1%;
	}
	@media (min-width: 600px) {
		width: 27.5%;
	}
	@media (min-width: 768px) {
		width: 20%;
		::after {
			content: "";
			display: block;
			margin-left: 22%;
		}
	}
	@media (min-width: 890px) {
		width: 20.5%;
	}
	@media (min-width: 1020px) {
		width: 15.9%;
	}
	@media (min-width: 1400px) {
		width: 16.5%;
	}
`;
// export const ProductCard = styled.div`
//   margin: 0.6rem;
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 12px 28px -12px #5e5d5d2b;
//   width: 90%;
//   flex: 0 1 90%;
//   @media (min-width: 600px) {
//     width: 20%;
//     flex: 0 1 20%;
//   }
//   @media (min-width: 768px) {
//     width: 20%;
//     flex: 0 1 20%;
//   }
//   @media (min-width: 860px) {
//     width: 20%;
//     flex: 0 1 20%;
//   }
//   @media (min-width: 1100px) {
//     width: 20%;
//     flex: 0 1 20%;
//   }
// `;
export const ImageDiv = styled.div`
	padding: 0 0 1rem;
	height: ${(props) => (props.height ? props.height : "100%")};
	width: ${(props) => (props.width ? props.width : "100%")};
`;
export const Name = styled.p`
	font-weight: 600;
	padding: 0 0 8px;
	width: 100%;
	height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
export const Price = styled.span`
	padding: 3px 0;
`;
