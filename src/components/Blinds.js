import Tile from './Tile';
import styled from 'styled-components';

const Blinds = ({ blinds, updateBlinds }) => {
	const handleClick = () => {
		updateBlinds(blinds ? 0 : 1);
	};

	return (
		<Tile>
			Blinds
			<BlindsContent>
				<button onClick={handleClick}>
					{blinds ? 'Closed' : 'Open'}
				</button>
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
