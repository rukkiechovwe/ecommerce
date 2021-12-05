import React, { useEffect, useState } from "react";
import { firestore, auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const history = useHistory();
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
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <UserContext.Provider value={{ userData: userData, signOut: signOut }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
