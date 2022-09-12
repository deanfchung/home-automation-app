import { useState } from 'react';

function App() {
	const [activeRoom, setActiveRoom] = useState(0);
	return (
		<>
			<div>Living Room</div>
			<div>Room Temperature</div>
			<div>Curtains</div>
			<div>Lights</div>
		</>
	);
}

export default App;
