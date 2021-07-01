import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import Button from "../../common/button";
import { firestore } from "../../firebase";

const UserProfile = () => {
	const user = useLocation().state.user;
	const history = useHistory();
	const [userData, setUserData] = useState([]);

	const docRef = firestore.collection("users").doc("uid");

	useEffect(() => {
		docRef
			.get()
			.then((doc) => {
				if (doc.exists) {
					//  console.log("Document data:", doc.data());
					setUserData(doc.data());
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}, []);

	return (
		<div>
			<h2>Profile</h2>
			<p>{user}</p>
			<p>{userData.name}</p>
			<Button onClick={() => history.goBack()}>Signout</Button>
		</div>
	);
};

export default UserProfile;
