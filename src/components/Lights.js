import Tile from './Tile';
import styled from 'styled-components';

const Lights = ({ lights, updateLights }) => {
	const handleClick = (index, status) => {
		const nextLights = [...lights]; //make shallow copy to avoid modifying state directly
		nextLights[index].status = status;
		updateLights(nextLights); //update next state with shallow copy
	};

	return (
		<Tile>
			Lights
			<TileContent>
				<TileRow>
					Bed Room
					<button onClick={() => handleClick(0, !lights[0].status)}>
						{lights[0].status ? 'Off' : 'On'}
					</button>
				</TileRow>
				<TileRow>
					Kitchen
					<button onClick={() => handleClick(1, !lights[1].status)}>
						{lights[1].status ? 'Off' : 'On'}
					</button>
				</TileRow>
				<TileRow>
					Living Room
					<button onClick={() => handleClick(2, !lights[2].status)}>
						{lights[2].status ? 'Off' : 'On'}
					</button>
				</TileRow>
			</TileContent>
		</Tile>
	);
};

const TileRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 0.3rem;
`;

const TileContent = styled.div`
	width: 85%;
`;

export default Lights;
