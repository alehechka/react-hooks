import { useState, useCallback } from 'react';

export const useToggle = (initialState: boolean = false) => {
	const [value, setValue] = useState<boolean>(initialState);

	const toggle = useCallback((input?: boolean | any) => {
		if (typeof input === 'boolean') {
			return setValue(input);
		}
		setValue(v => !v);
	}, []);

	const turnOff = useCallback(() => {
		setValue(false);
	}, []);

	const turnOn = useCallback(() => {
		setValue(true);
	}, []);

	return [value, toggle, turnOn, turnOff] as const;
};

export default useToggle;
