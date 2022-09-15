import Tile from './Tile';
import styled from 'styled-components';

const Lights = () => {
	return (
		<Tile>
			Lights
			<TileContent>
				<TileRow>
					Living Room <button>On</button>
				</TileRow>
				<TileRow>
					Bed Room <button>On</button>
				</TileRow>
				<TileRow>
					Kitchen <button>On</button>
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
