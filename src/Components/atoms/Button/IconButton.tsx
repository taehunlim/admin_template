import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	style?: React.CSSProperties;
	children?: React.ReactNode;
	type?: "reset" | "submit";
	onClick?: () => void;
};

const IconButton: React.FC<ButtonProps> = props => {

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
	padding: 0;
	font-size: 16px;
	width: 25px;
	height: auto;
	background-color: #fff;
	border: none;
	align-items: center;
`

export default IconButton;