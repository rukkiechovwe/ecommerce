import React, { useContext } from "react";
import Button from "../../common/button";
import { UserContext } from "../../context/userContext";

const UserProfile = () => {
  const { userData, signOut, setUserState } = useContext(UserContext);

  return (
    <div>
      {userData && (
        <>
          <h2>Profile</h2>
          <p>{userData.email}</p>
          <p>{userData.name}</p>
          <Button
          width="300px"
            onClick={() => {
              signOut();
              setUserState(false);
            }}
          >
            Signout
          </Button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
