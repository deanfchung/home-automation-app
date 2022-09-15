import styled from 'styled-components';

const Tile = styled.div`
	background-color: #c5c6c7;
	height: ${(props) => (props.height ? props.height : '6.5rem')};
	width: ${(props) => (props.width ? props.width : '10rem')};
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0.3rem;
	padding: 0.3rem;
`;
export default Tile;
