import React, {useState} from 'react';
import styled from '@emotion/styled';

import FormItem from '../../molecules/FormItem';
import Button from '../../atoms/Button/Button';

interface FormDataProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC = () => {

    const [formData, setFormData] = useState<FormDataProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {name, email, password, confirmPassword} = formData;

    const handleChange = (text: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [text]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData)
    }

    return (
        <Register onSubmit={handleSubmit}>
            <FormItem
				labelTag="newName"
                type="name"
                placeholder="이름"
                value={name}
                onChange={handleChange("name")}
            >
                이름
            </FormItem>

            <FormItem
				labelTag="newEmail"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={handleChange("email")}
            >
                이메일
            </FormItem>

            <FormItem
				labelTag="newPassword"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={handleChange("password")}
            >
                비밀번호
            </FormItem>

            <FormItem
				labelTag="newConfirmPasword"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={handleChange("confirmPassword")}
            >
                비밀번호 확인
            </FormItem>
            <Button
                 type="submit"
            >
                회원가입
            </Button>
        </Register>
    );
};

const Register = styled.form`
    width: 450px;


    @media (max-width: 768px) {
        width: 100%
    }
`;

export default RegisterForm;