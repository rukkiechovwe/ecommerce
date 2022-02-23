import * as S from "./styles";

const Button = ({
  color,
  background,
  width,
  onClick,
  children,
  textTransform,
  position,
  disabled,
}) => {
  return (
    <S.Button
      color={color}
      width={width}
      textTransform={textTransform}
      onClick={onClick}
      background={background}
      position={position}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
