import React, { useContext } from "react";
// import Button from "../../common/button";
import DashboardNav from "../../components/dashboardNav";
import { UserContext } from "../../context/userContext";

import * as S from "./styles";

const Orders = () => {
  const { userData } = useContext(UserContext);

  return (
    <S.Container>
      <DashboardNav/>
      <div>
         {userData && (
        <>
          <h2>Orders</h2>
         
        </>
      )}
      </div>
    </S.Container>
  );
};

export default Orders;
