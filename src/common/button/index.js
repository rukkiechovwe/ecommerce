import * as S from "./styles";

const Button = ({
  color,
  background,
  width,
  onClick,
  children,
  textTransform,
  disabled,
}) => {
  return (
    <S.Button
      color={color}
      width={width}
      textTransform={textTransform}
      onClick={onClick}
      background={background}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
