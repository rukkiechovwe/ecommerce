import styled from "styled-components";
export const Container = styled.div`
	margin: 2rem 0;
	width: 100%;
`;
export const Input = styled.input`
	width: 100%;
	background: #fff;
	border-bottom: 1px solid hsl(0, 0%, 53.3%);
	margin: 0.5rem 0;
	color: #222;
	:focus {
		padding: 0.5rem;
		border-bottom: 2px solid hsla(184, 50%, 45%, 1);
	}
	::placeholder {
		color: #222;
	}
`;
export const Label = styled.label`
	padding: 0.5rem 0;
`;
export const ErrorText = styled.span`
  color: #ff2424;
`;
