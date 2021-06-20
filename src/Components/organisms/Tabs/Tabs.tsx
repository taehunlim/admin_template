import React, { useState } from 'react';
import styled from '@emotion/styled';

interface TabsProps {
	tabItems: Array<object>;
	initialTab?: number;
};

interface ListType {
	title: string;
	content: string;
};

const Tabs: React.FC<TabsProps> = props => {

	const { tabItems, initialTab } = props;

	const useTabs = (initialTab, allTabs) => {
		const [currentIdx, setCurrentIdx] = useState<number>(initialTab ? initialTab : 0);

		if (!allTabs || !Array.isArray(allTabs)) {
			return;
		};

		return {
			currentItem: allTabs[currentIdx],
			changeItem: setCurrentIdx
		};
	};

	const { currentItem, changeItem } = useTabs(initialTab, tabItems);

	return (
		<Tab>
			{tabItems && tabItems.map((list: ListType, i: number) => (
				<TabItem key={i}>
					<TabTitle
						className={
							`${currentItem.id === i ? "tabs-active" : "tabs-no-active"}`
						}
						onClick={() => changeItem(i)}
					>
						{list.title}
					</TabTitle>
					
					{currentItem.id === i ? (
						<TabContent>
							{list.content}
						</TabContent>
					) : ""}
				</TabItem>
			))}
		</Tab>
	);
};

const Tab = styled.div`
	display: flex;
	min-height: 400px;
	border: 1px solid;

	font-size: 14px;
	font-weight: bold;

	text-align: center;
	color: #1d1d1f;
`;

const TabItem = styled.div`
	width: 100%;
	height: fit-content;
`;

const TabTitle = styled.div`
padding: 20px;

&.tabs-active {
	border-bottom: 2px solid #1d1d1f;
}

&.tabs-no-active {
	border-bottom: 1px solid #8b8b91;
	color: #8b8b91;
}
`;

const TabContent = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	padding: 20px;
	
	word-break: break-word;
`;

export default Tabs;