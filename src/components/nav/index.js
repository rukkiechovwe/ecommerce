import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import * as S from "./styles";

const Nav = () => {
  const user_id = localStorage.getItem("user_id");
  const { cartTotal } = useContext(CartContext);

  return (
    <S.Header>
      <S.Container>
        <S.Ul>
          <S.Logo to="/">Logo</S.Logo>
          <S.NavContainer>
            {user_id ? (
              <S.NavLink to="/account">PROFILE</S.NavLink>
            ) : (
              <>
                <S.NavLink to="/sign-in">LOGIN</S.NavLink>
                <S.NavLink to="/sign-up">SIGNUP</S.NavLink>
              </>
            )}

            <S.NavLink to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>{" "}
              {cartTotal > 0 && cartTotal}
            </S.NavLink>
          </S.NavContainer>
        </S.Ul>
      </S.Container>
    </S.Header>
  );
};

export default Nav;
