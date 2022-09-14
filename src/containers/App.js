import { useState, useEffect } from 'react';
import '../index.css';
import Temperature from '../components/Temperature';
import useAutomation from '../hooks/hooks';

const App = () => {
	const [temperature, setTemperature] = useState(0);
	const [blinds, setBlinds] = useState(0);
	const [lights, setLights] = useState([
		{ id: 'bedroom', status: 0 },
		{ id: 'kitchen', status: 1 },
		{ id: 'livingRoom', status: 1 },
	]);

	const { getStatus, updateTemperature } = useAutomation(
		setTemperature,
		setBlinds,
		setLights
	);

	useEffect(() => {
		getStatus();
	}, [getStatus]);

	return (
		<>
			<div>
				<Temperature
					temperature={temperature}
					updateTemperature={updateTemperature}
					setTemperature={setTemperature}
				/>
			</div>
			<div>Lights</div>
			<div>Blinds</div>
		</>
	);
};

export default App;
