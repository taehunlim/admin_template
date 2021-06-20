import React from 'react';
import styled from '@emotion/styled';

interface CheckBoxProps {
	id?: string;
	name?: string;
	value?: any;
	checked?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = props => {

	const { id, name, value, checked } = props;

	return (
		<Box>
			<Check
				id={id}
				type="checkbox"
				name={name}
				value={value}
				checked={checked}
			/>
		</Box>
	);
};

const Box = styled.div`
	width: 16px;
	height: 16px;
	display: flex;
	border: 1px solid;
	border-radius: 3px;
	margin: 5px;
`;

const Check = styled.input`
	margin: 0px;
	appearance: none;

	width: 100%;
	height: 100%;

	text-align: center;

	&:checked {
		background-color: cadetblue;
		::after {
			font-family: "Font Awesome 5 Free";
			content: "\f00c";
			font-weight: 700;
			color: beige;
		}
	}
`;

export default CheckBox;