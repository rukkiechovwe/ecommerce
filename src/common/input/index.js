import * as S from "./styles";

const InputField = ({ onChange, placeholder, title, type, name }) => {
	return (
		<S.Container>
			<S.Label>{title}</S.Label>
			<S.Input type={type} name={name} onChange={onChange} placeholder={placeholder} />
		</S.Container>
	);
};

export default InputField;
