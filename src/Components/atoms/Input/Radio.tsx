import React from 'react';
import styled from '@emotion/styled';

interface RadioButtonProps {
	id?: string;
	name?: string;
	value?: any;
	checked?: boolean;
}

const Radio: React.FC<RadioButtonProps> = props => {

	const {id, name, value, checked} = props;

	return (
		<RadioBtn>
			<RadioCheck
				id={id}
				type="radio"
				name={name}
				value={value}
				checked={checked}
			/>
		</RadioBtn>
	);
};



const RadioBtn = styled.div`
	display: flex;
	border: 1px solid;
	border-radius: 100%;
	margin: 5px;

	width: 16px;
	heigth: 16px;
`;

const RadioCheck = styled.input`
	margin: 3px;
	appearance: none;

	width: 0.5rem;
	height: 0.5rem;

	border-radius: 100%;

	&:checked {
		background-color: red;
	}
`;

export default Radio;