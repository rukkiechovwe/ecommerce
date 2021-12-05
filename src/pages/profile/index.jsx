import React, { useContext } from "react";
import { useLocation } from "react-router";
import Button from "../../common/button";
import { UserContext } from "../../context/userContext";

const UserProfile = () => {
  const user = useLocation().state.user;
  const { userData, signOut } = useContext(UserContext);

  return (
    <div>
      {userData && (
        <>
          <h2>Profile</h2>
          <p>{user}</p>
          <p>{userData.name}</p>
          <Button onClick={() => signOut()}>Signout</Button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
