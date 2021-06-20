import React, { useState } from 'react';
import { atom, useRecoilState, useRecoilCallback, useGotoRecoilSnapshot} from 'recoil';

const counter = atom({
	key: "counter",
	default: 0
});

const Home = () => {

	const [count, setCount] = useRecoilState(counter);

	const [snapshotList, setSnapshotList] = useState([]);
	const updateSnapshot = useRecoilCallback(({ snapshot }) => async () => {
		const release = snapshot.retain();
		try {
			await setSnapshotList(prevList => [...prevList, snapshot]);
		} finally {
			release();
		}

	});

	const gotoSnapshot = useGotoRecoilSnapshot();

	return (

		<div>
			<p>Count: {count}</p>
			<br />
			<button onClick={() => setCount(count + 1)}>
				카운트 증가
			</button>

			<p>{snapshotList.length}</p>
			<button onClick={updateSnapshot}> 현재 상태 스냅샷</button>

			<ul>
				{snapshotList.map((snapshot, i) => (
					<li key={i}>
						<button onClick={() => gotoSnapshot(snapshot)}>
							Snapshot store #{i + 1}
						</button>
					</li>
				))}
			</ul>
		</div>

	);
};

export default Home;