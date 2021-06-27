import React, { useState } from "react";
import InputField from "../../common/input";
import * as S from "./styles";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	return (
		<S.Container>
			<S.AuthForm>
				<InputField
					title="Email"
					type="email"
					placeholder="hello@gmail.com"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</S.AuthForm>
		</S.Container>
	);
};

export default ResetPassword;
