export const Validation = (field, name, email, password) => {
	const errors = {};
	const validEmailRegex = RegExp(
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);

	switch (field) {
		case "fullName":
			errors.fullName = name.length < 5 ? "Full Name must be 5 characters long!" : "";
			break;
		case "email":
			errors.email = validEmailRegex.test(email) ? "" : "Email is not valid!";
			break;
		case "password":
			errors.password = password.length < 8 ? "Password must be 8 characters long!" : "";
			break;
		default:
			break;
	}

	console.log(errors);
	return errors;
};
