const BackgroundTile = (props) => {
	return (
		<div
			style={{
				backgroundColor: '#c5c6c7',
				height: props.height ? props.height : '6rem',
				width: props.width ? props.width : '10rem',
			}}>
			{props.children}
		</div>
	);
};

export default BackgroundTile;
