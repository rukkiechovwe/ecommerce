import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;
export const FormContainer = styled.div`
  width: 45%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #fff;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginText = styled.h1`
  text-align: center;
`;
export const AuthForm = styled.form`
  width: 100%;
  padding: 15px;
  height: 100%;
`;

export const Onboarding = styled.div`
		text-align: center;
		width: 55%;
		height 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
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

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
export const ImgContainer = styled.div`
  height: 24rem;
`;
export const Title = styled.h1`
  color: #fff;
  padding: 3rem 0 0;
`;
export const Text = styled.p`
  color: #fff;
  padding: 1rem 0;
`;
