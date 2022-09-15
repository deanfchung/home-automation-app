import { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../index.css';
import Temperature from '../components/Temperature';
import Lights from '../components/Lights';
import Blinds from '../components/Blinds';
import useAutomation from '../hooks/hooks';

const App = () => {
	// We are skipping state management with redux or flux here because our app only needs to pass props down one level
	const [temperature, setTemperature] = useState(0);
	const [blinds, setBlinds] = useState(1);
	const [lights, setLights] = useState([
		{ id: 'bedroom', status: 0 },
		{ id: 'kitchen', status: 1 },
		{ id: 'livingRoom', status: 1 },
	]);

	const { getStatus, updateTemperature, updateBlinds } = useAutomation(
		setTemperature,
		setBlinds,
		setLights
	);

	useEffect(() => {
		getStatus();
	}, [getStatus]);

	return (
		<Main>
			<Tile>
				<Temperature
					temperature={temperature}
					updateTemperature={updateTemperature}
					setTemperature={setTemperature}
				/>
			</Tile>
			<Tile>
				<Lights />
			</Tile>
			<Tile>
				<Blinds
					blinds={blinds}
					updateBlinds={updateBlinds}
				/>
			</Tile>
		</Main>
	);
};

const Main = styled.main`
	display: flex;
	justify-content: center;
	margin-top: 10rem;
	flex-direction: column;
	@media (max-width: 35rem) {
		flex-direction: column;
	}
	@media (min-width: 35rem) {
		flex-direction: row;
	}
`;

const Tile = styled.div`
	margin: 0.5rem;
`;

export default App;
