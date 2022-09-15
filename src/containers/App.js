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
		{ id: 0, value: 'bedroom', status: 0 },
		{ id: 1, value: 'kitchen', status: 1 },
		{ id: 2, value: 'livingRoom', status: 1 },
	]);

	const { getStatus, updateTemperature, updateBlinds, updateLights } =
		useAutomation(setTemperature, setBlinds, setLights); //extract functions to interact with server

	useEffect(() => {
		getStatus(); //call api when we open app and populate state
	}, [getStatus]);

	return (
		<Main>
			<Tile>
				<Temperature
					temperature={temperature}
					updateTemperature={updateTemperature}
				/>
			</Tile>
			<Tile>
				<Lights
					lights={lights}
					updateLights={updateLights}
				/>
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
