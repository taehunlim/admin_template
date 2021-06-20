import React from 'react';
import styled from '@emotion/styled';

interface SearchProps {
	id?: string;
	style?: React.CSSProperties;
	placeholder?: string;
	value?: any;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchProps> = props => {

	const {id, style, placeholder, value, onChange} = props;

	return (
		<Search
			id={id}
			style={style}
			type="search"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

const Search = styled.input`
	font-size: 15px;
	padding: 8px;
	border-radius: 5px;

	&[type=search] {
		::-ms-clear,
		::-ms-reveal {
			appearance: none;
			display: block;

			width: 15px;
			height: 15px;
			background: url(${require("../../../assets/images/close.png")}) no-repeat;
			background-position: center;
			background-size: contain;
		}

		::-webkit-search-decoration,
		::-webkit-search-cancel-button,
		::-webkit-search-results-button,
		::-webkit-search-results-decoration{
			appearance: none;
			display: block;

			width: 15px;
			height: 15px;
			background: url(${require("../../../assets/images/close.png")}) no-repeat;
			background-position: center;
			background-size: contain;
		}
	}
`;

export default SearchBar;