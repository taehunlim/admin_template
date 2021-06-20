import React from 'react';
import styled from '@emotion/styled';

interface LabelProps {
	htmlFor: string;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = props => {
	
	const {htmlFor, children} = props

	return (
		<LABEL htmlFor={htmlFor}>
			{children}
		</LABEL>
	);
};

const LABEL = styled.label`
	font-size: 15px;
	color: black;
	margin: 0 0 5px 5px;
`;

export default Label;