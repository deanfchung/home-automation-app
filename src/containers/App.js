import { useState, useEffect } from 'react';
import '../index.css';
import RoomSelect from '../components/RoomSelect';
import RoomTemperature from '../components/RoomTemperature';
import useAutomation from '../hooks/hooks';

function App() {
	const [activeRoom, setActiveRoom] = useState(0);
	const [temperature, setTemperature] = useState(70);
	const [blinds, setBlinds] = useState(0);
	const [lights, setLights] = useState([
		{ id: 'bedroom', status: 0 },
		{ id: 'kitchen', status: 1 },
		{ id: 'livingRoom', status: 1 },
	]);
	const { getStatus } = useAutomation();

	useEffect(() => {
		getStatus(setTemperature, setBlinds, setLights);
	}, [getStatus]);
	return (
		<>
			<div>
				<RoomSelect
					setActiveRoom={setActiveRoom}
					activeRoom={activeRoom}
				/>
			</div>
			<div>
				<RoomTemperature temperature={temperature} />
			</div>
			<div>Curtains</div>
			<div>Lights</div>
		</>
	);
}

export default App;
