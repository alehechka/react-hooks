import { renderHook } from '@testing-library/react-hooks';
import { useOnMount } from '../src';

test('Should increment state onMount', () => {
	let state = 0;

	expect(state).toBe(0);

	const { rerender, unmount } = renderHook(() =>
		useOnMount(() => {
			state += 1;
			return () => {
				state = -1;
			};
		})
	);

	expect(state).toBe(1);

	rerender();

	expect(state).toBe(1);

	unmount();

	expect(state).toBe(-1);
});
