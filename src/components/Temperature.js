import Tile from './Tile';
import styled from 'styled-components';

const Temperature = ({ temperature, updateTemperature }) => {
	const handleAdd = () => {
		if (temperature === 90) return; // set maximum temp
		updateTemperature(temperature + 1); // increment
	};
	const handleSubtract = () => {
		if (temperature === 60) return; // set minimum temp
		updateTemperature(temperature - 1); // decrement
	};

	return (
		<div>
			<Tile>
				Temperature (F)
				<TemperatureDegrees>{temperature}</TemperatureDegrees>
				<ButtonContainer>
					<button onClick={handleSubtract}>{'<'}</button>
					<button onClick={handleAdd}>{'>'}</button>
				</ButtonContainer>
			</Tile>
		</div>
	);
};

const TemperatureDegrees = styled.div`
	margin-top: 0.6rem;
`;

const ButtonContainer = styled.div`
	margin-top: 0.4rem;
	width: 40%;
	display: flex;
	justify-content: space-between;
`;

export default Temperature;
