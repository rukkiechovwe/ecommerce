import React, { useContext } from "react";
import DashboardNav from "../../components/dashboardNav";
import { UserContext } from "../../context/userContext";

import * as S from "./styles";

const Transactions = () => {
  const { userData } = useContext(UserContext);

  return (
    <S.Container>
      <DashboardNav/>
      <div>
         {userData && (
        <>
          <h2>Transactions</h2>
         
        </>
      )}
      </div>
    </S.Container>
  );
};

export default Transactions;
