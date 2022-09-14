const RoomSelect = ({ activeRoom, setActiveRoom }) => {
	return (
		<div>
			<select
				className='room-select'
				onChange={(e) => setActiveRoom(e.target.value)}
				value={activeRoom}>
				<option value={0}>Living Room</option>
				<option value={1}>Kitchen</option>
				<option value={2}>Bedroom</option>
			</select>
		</div>
	);
};

export default RoomSelect;
