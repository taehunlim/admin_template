import React, { Children } from 'react';
import styled from '@emotion/styled';

import {SearchBar} from '../atoms/Input/_index'
import {Button} from '../atoms/Button/_index';

interface SearchBarProps {
	id?: string;
	children: React.ReactNode;
	placeholder?: string;
	value: any
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchBarProps> = props => {

	const {id, children, placeholder, value, onChange, onSubmit} = props;

	return (
		<Search onSubmit={onSubmit}>
			<SearchBar
				style={{
					width: "70%"
				}}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<Button 
				style={{
					width: "30%",
					marginLeft: "20px"
				}}
				type="submit"
			>
				{children}
			</Button>
		</Search>
	);
};

const Search = styled.form`
	display: flex;
	width: 100%;
`;

export default SearchForm;