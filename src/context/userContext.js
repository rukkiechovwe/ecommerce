import React, { useEffect, useState } from "react";
import { firestore, auth } from "../firebase";

export const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});
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

  return (
    <UserContext.Provider value={{ userData: userData }}>
      {{ children }}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
