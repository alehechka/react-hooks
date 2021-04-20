import { useState, useCallback } from 'react';

export type ToggleIndexes = [boolean, VoidFunction, VoidFunction, VoidFunction];

export const useToggle = (initialState: boolean = false): ToggleIndexes => {
	const [value, setValue] = useState<boolean>(initialState);

	const toggle = useCallback(() => {
		setValue(v => !v);
	}, []);

	const turnOff = useCallback(() => {
		setValue(false);
	}, []);

	const turnOn = useCallback(() => {
		setValue(true);
	}, []);

	return [value, toggle, turnOn, turnOff];
};

export default useToggle;
