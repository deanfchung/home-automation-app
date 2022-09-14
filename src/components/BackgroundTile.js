const BackgroundTile = (props) => {
	return (
		<div
			style={{
				backgroundColor: '#c5c6c7',
				height: props.height ? props.height : '6rem',
				width: props.width ? props.width : '10rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderRadius: '0.3rem',
			}}>
			{props.children}
		</div>
	);
};

export default BackgroundTile;
