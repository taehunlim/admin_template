import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	style?: React.CSSProperties;
	children?: React.ReactNode;
	type?: "reset" | "submit";
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = props => {

	const {style, children, type, onClick} = props;

	return (
		<BTN
			style={style}
			type={type}
			onClick={onClick}
		>
			{children}
		</BTN>
	);
};

const BTN = styled.button`
	font-size: 16px;
	height: auto;
	background-color: #fff;
	border-radius: 5px;
	padding: 15px 20px;
	flex-direction: column;
	align-items: center;
`

export default Button;