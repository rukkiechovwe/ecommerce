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
        const user_id = localStorage.getItem("user_id");
        if (user_id === null) {
          localStorage.setItem("user_id", user.uid);
        }
        firestore
          .collection("users")
          .doc(user_id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log(doc.data());
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
        localStorage.removeItem("user_id");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <UserContext.Provider value={{ userData, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
