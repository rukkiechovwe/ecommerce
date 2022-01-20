import * as S from "./styles";

const InputField = ({
  margin,
  width,
  onChange,
  placeholder,
  title,
  type,
  name,
  error,
}) => {
  return (
    <S.Container width={width} margin={margin}>
      <S.Label>{title}</S.Label>
      <S.Input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="new-password"
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};

export default InputField;
