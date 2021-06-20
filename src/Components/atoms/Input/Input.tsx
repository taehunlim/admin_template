import React from 'react';
import styled from '@emotion/styled';

interface InputProps {
	id?: string;
	style?: React.CSSProperties;
	placeholder?: string;
	type?: string;
	value?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = props => {

	const { id, style, placeholder, type, value, onChange } = props;

	return (
		<INP
			id={id}
			style={style}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

const INP = styled.input`
	font-size: 15px;
	padding: 8px;
	width: 100%;
	border-radius: 5px;
`

export default Input;