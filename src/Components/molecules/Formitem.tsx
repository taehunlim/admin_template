import React, { Children } from 'react';
import styled from '@emotion/styled';

//atom;
import Label from '../atoms/Label/Label';
import Input from '../atoms/Input/Input';

interface FormItemProps {
	labelTag: string; 
	children?: React.ReactNode;
	
	placeholder?: string;
	type?: string
	value?: any
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Formitem: React.FC<FormItemProps> = (props) => {

	const {labelTag, children, placeholder, type, value, onChange} = props;

	return (
		<LabelInput>
			<Label htmlFor={labelTag}>
				{children}
			</Label>
			<Input
				id={labelTag}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</LabelInput>
	);
};

const LabelInput = styled.div`
	text-align: left;
	width:100%;
	margin: 15px 0;
`;

export default Formitem;