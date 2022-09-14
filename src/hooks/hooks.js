const useAutomation = () => {
	const getStatus = async (setTemperature, setBlinds, setLights) => {
		const response = await fetch('/api/homestatus');
		const { data } = await response.json();
		const { temperature, lights, blinds } = data;
		setTemperature(temperature, setBlinds(blinds), setLights(lights));
	};
	return { getStatus };
};

export default useAutomation;
