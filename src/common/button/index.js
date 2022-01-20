import * as S from "./styles";

const Button = ({ color,background, width, onClick, children, textTransform }) => {
  return (
    <S.Button
      color={color}
      width={width}
      textTransform={textTransform}
      onClick={onClick}
      background={background}
    >
      {children}
    </S.Button>
  );
};

export default Button;
