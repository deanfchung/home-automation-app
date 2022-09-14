import BackgroundTile from './BackgroundTile';

const RoomTemperature = ({ temperature }) => {
	return (
		<div>
			<BackgroundTile>
				Room Temperature <div>{temperature}</div>
			</BackgroundTile>
		</div>
	);
};

export default RoomTemperature;
