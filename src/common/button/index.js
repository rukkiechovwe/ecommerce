import * as S from "./styles";

const Button = ({ color, width, onClick, children }) => {
  return (
    <S.Button color={color} width={width} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
