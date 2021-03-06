import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Button from "../../common/button";
import {
  HouseSimple,
  // Ticket, Handbag,
  Power,
} from "phosphor-react";

import * as S from "./styles";

const DashboardNav = () => {
  const { signOut } = useContext(UserContext);
  return (
    <S.Header>
      <S.Container>
        <S.Ul>
          <S.Logo to="/">Rk-Store</S.Logo>
          <S.NavContainer>
            <S.Link
              to="/account"
              activeStyle={{
                background: "hsla(163, 53%, 46%, 0.8)",
                color: "#fff",
                paddingRight: "0px",
                margin: "1rem",
                borderRadius: "5px",
                transition: "all 0.2s linear 0s",
              }}
            >
              <HouseSimple size={24} /> <span className="span">Home</span>
            </S.Link>
          </S.NavContainer>
          {/* <S.NavContainer>
            <S.Link
              to="/orders"
              activeStyle={{
                background: "hsla(163, 53%, 46%, 0.8)",
                color: "#fff",
                paddingRight: "0px",
                margin: "1rem",
                borderRadius: "5px",
                transition: "all 0.2s linear 0s",
              }}
            >
              <Handbag size={24} />
              <span className="span">Orders</span>
            </S.Link>
          </S.NavContainer>
          <S.NavContainer>
            <S.Link
              to="/transactions"
              activeStyle={{
                background: "hsla(163, 53%, 46%, 0.8)",
                color: "#fff",
                paddingRight: "0px",
                margin: "1rem",
                borderRadius: "5px",
                transition: "all 0.2s linear 0s",
              }}
            >
              <Ticket size={24} /> <span className="span">Transactions</span>
            </S.Link>
          </S.NavContainer> */}
        </S.Ul>
        <S.ButtonContainer>
          <Button
            width="100%"
            background="transparent"
            color="#F00303"
            onClick={() => {
              signOut();
            }}
          >
            <Power size={24} />
            <span className="span">Signout</span>
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Header>
  );
};

export default DashboardNav;
