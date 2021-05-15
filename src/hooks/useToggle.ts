import { useState, useCallback } from 'react';

export const useToggle = (initialState: boolean = false) => {
	const [value, setValue] = useState<boolean>(initialState);

	/**
	 * Toggles the state of the hook between true and false.
	 * Optional parameter can explicitly change the state.
	 * @param {boolean} [value] - Provided value to set state to.
	 */
	const toggle = useCallback((input?: boolean | any) => {
		if (typeof input === 'boolean') {
			return setValue(input);
		}
		setValue((v) => !v);
	}, []);

	/**
	 * Sets the state of the hook to true.
	 */
	const turnOff: VoidFunction = useCallback(() => {
		setValue(false);
	}, []);

	/**
	 * Sets the state of the hook to false.
	 */
	const turnOn: VoidFunction = useCallback(() => {
		setValue(true);
	}, []);

	return [value, toggle, turnOn, turnOff] as const;
};

export default useToggle;
