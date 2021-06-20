import React, {useState} from 'react';
import styled from '@emotion/styled';

import Formitem from '../../molecules/FormItem';
import Button from '../../atoms/Button/Button';

interface FormDataProps {
	email: string;
	password: string;
};

const LoginForm: React.FC = () => {

	const [formData, setFormData] = useState<FormDataProps>({
		email: "",
		password: ""
	});

	const {email, password} = formData;

	const handleChange = (text: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [text]: e.target.value})
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<Login
			onSubmit={handleSubmit}
		>
			<Formitem
				labelTag="userEmail"
				type="email"
				placeholder="이메일"
				value={email}
				onChange={handleChange("email")}
			>
				이메일
			</Formitem>

			<Formitem
				labelTag="userPassword"
				type="password"
				placeholder="비밀번호"
				value={password}
				onChange={handleChange("password")}
			>
				비밀번호
			</Formitem>

			<Button
				type="submit"
			>
				로그인
			</Button>
		</Login>
	);
};

const Login = styled.form`
	width: 100%;
`;

export default LoginForm;