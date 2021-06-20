import React, { useState } from 'react';
import styled from '@emotion/styled';

interface AccordionProps {
	lists: Array<object>;
	titleName?: string;
}

interface ListType {
	title: string;
	content: string;
}

const Accordion: React.FC<AccordionProps> = props => {

	const { lists, titleName } = props;

	const [activeIndex, setActiveIndex] = useState<number>(null)

	return (
		<AccordionMenu>

			{titleName ? (
				<AccordionHeader>
					{titleName}
				</AccordionHeader>
			) : ""}


			{lists && lists?.map((list: ListType, i: number) => (

				<AccordionBody
					key={i}
					className={activeIndex === i ? "active" : ""}
				>
					<AccordionTitles
						className="has-arrow"
						onClick={() =>
							setActiveIndex(activeIndex === i ? null : i)
						}
					>
						{list.title}
					</AccordionTitles>

					{activeIndex === i ? (
						<AccordionContents>
							{list.content}
						</AccordionContents>
					) : ""}

				</AccordionBody>
			))}

		</AccordionMenu>
	);
};

const AccordionMenu = styled.div`
min-width: 360px;
height: auto;

border: 1px solid rgba(0, 0, 0, 0.125);
`;

const AccordionHeader = styled.div`
padding: 22px 20px;

line-height: 1;
letter-spacing: normal;
color: #1d1d1f;
`;

const AccordionBody = styled.div`
padding: 22px 20px;
border-top: 1px solid rgba(0, 0, 0, 0.125);
font-weight: bold;

&:first-of-type {
	border: none;
}

line-height: 1;
letter-spacing: -0.2px;
color: #343437;

&.active {
	color: green;
	font-weight: bold;

	>.has-arrow {
		&:after {
			transform: rotate(-180deg);
		}
	}
}
`;

const AccordionTitles = styled.div`

&.has-arrow {
	&:hover {
		cursor: pointer;
	}

	&:after {

		font-family: "Font Awesome 5 Free";
		content: "\f107";

		font-weight: 900;
		display: block;
		float: right;
		transition: transform .2s;
		font-size: 1rem;
	}
}
`;

const AccordionContents = styled.div`

margin-top: 22px;

line-height: 1.71;
letter-spacing: -0.2px;
color: #5c5c62;
`;

export default Accordion;