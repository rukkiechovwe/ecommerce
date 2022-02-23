import React, { useContext } from "react";
// import Button from "../../common/button";
import DashboardNav from "../../components/dashboardNav";
import { UserContext } from "../../context/userContext";
import { UserCircle } from "phosphor-react";

import * as S from "./styles";

const UserProfile = () => {
  const { userData } = useContext(UserContext);

  return (
    <S.Wrapper>
      <DashboardNav />
      <S.Container>
        {userData.name || userData.email ? (
          <S.Profile>
            <UserCircle color=" #5fc2a6" weight="light" size={60} />
            <S.Name>{userData.name}</S.Name>
            <S.Email>{userData.email}</S.Email>
          </S.Profile>
        ) : (
          <div className="loader-wrapper">
            <div className="loader">
              <span className="spin spin-1"></span>
              <span className="spin spin-2"></span>
            </div>
            <p className="text text-6">text</p>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default UserProfile;
