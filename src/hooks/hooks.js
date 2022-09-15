import { useCallback } from 'react';

const useAutomation = (setTemperature, setBlinds, setLights) => {
	const getStatus = async () => {
		try {
			const response = await fetch('/api/status');
			const { data } = await response.json();
			const { temperature, lights, blinds } = data;
			setTemperature(temperature);
			setBlinds(blinds);
			setLights(lights);
		} catch (err) {
			console.error('error fetching statuses: ', err);
		}
	};

	const updateTemperature = async (temperature) => {
		try {
			const response = await fetch('api/temperature', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
				body: JSON.stringify({ temperature }),
			});
			const message = await response.json();
			console.log('message: ', message);
			setTemperature(temperature);
		} catch (err) {
			console.error('error updating temperature: ', err);
		}
	};

	const updateBlinds = async (status) => {
		try {
			const response = await fetch('api/blinds', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
				body: JSON.stringify({ status }),
			});
			const message = await response.json();
			console.log(message);
			setBlinds(status);
		} catch (err) {
			console.error('Unable to update blind status: ', err);
		}
	};

	const updateLights = async (lights) => {
		try {
			const response = await fetch('api/lights', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
				body: JSON.stringify({ lights }),
			});
			const message = await response.json();
			console.log(message);
			setLights(lights);
		} catch (err) {
			console.error('Unable to update lights: ', err);
		}
	};

	return {
		getStatus: useCallback(getStatus, [
			setTemperature,
			setBlinds,
			setLights,
		]),
		updateTemperature,
		updateBlinds,
		updateLights,
	};
};

export default useAutomation;
