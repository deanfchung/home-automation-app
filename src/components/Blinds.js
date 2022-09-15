import Tile from './Tile';
import styled from 'styled-components';

const Blinds = () => {
	return (
		<Tile>
			Blinds
			<BlindsContent>
				<button>Open</button>
			</BlindsContent>
		</Tile>
	);
};

const BlindsContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50%;
`;

export default Blinds;
