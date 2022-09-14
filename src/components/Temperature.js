import BackgroundTile from './BackgroundTile';

const Temperature = ({ temperature, updateTemperature }) => {
	const handleAdd = () => {
		if (temperature === 90) return;
		updateTemperature(temperature + 1);
	};
	const handleSubtract = () => {
		if (temperature === 60) return;
		updateTemperature(temperature - 1);
	};

	return (
		<div>
			<BackgroundTile>
				Temperature (F)
				<div style={{ marginTop: '0.4rem' }}>{temperature}</div>
				<div style={{ marginTop: '0.2rem' }}>
					<button onClick={handleSubtract}>-</button>
					<button onClick={handleAdd}>+</button>
				</div>
			</BackgroundTile>
		</div>
	);
};

export default Temperature;
