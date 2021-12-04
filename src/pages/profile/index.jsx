import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import Button from "../../common/button";
import { firestore, auth } from "../../firebase";

const UserProfile = () => {
  const user = useLocation().state.user;
  const history = useHistory();
  const [userData, setUserData] = useState({});
  // const userContext = useContext(UserContext)


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              setUserData(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    });
  }, []);
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("signout successful");
        history.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Profile</h2>
      <p>{user}</p>
      <p>{userData.name}</p>
      <Button onClick={() => signOut()}>Signout</Button>
    </div>
  );
};

export default UserProfile;
