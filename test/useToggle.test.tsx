import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../src';

test('Should initiate with false as default value', () => {
	const { result } = renderHook(() => useToggle());
	const [value] = result.current;
	expect(value).toBe(false);
});

test('Should initiate with provided value true', () => {
	const { result } = renderHook(() => useToggle(true));
	const [value] = result.current;
	expect(value).toBe(true);
});

test('Should initiate with provided value false', () => {
	const { result } = renderHook(() => useToggle(false));
	const [value] = result.current;
	expect(value).toBe(false);
});

test('Should toggle from false to true', () => {
	const { result } = renderHook(() => useToggle(false));

	let [value, toggleState] = result.current;

	act(() => {
		toggleState();
	});

	[value] = result.current;
	expect(value).toBe(true);
});

test('Should toggle from true to false explicitly', () => {
	const { result } = renderHook(() => useToggle(true));

	let [value, toggle, , turnOff] = result.current;

	act(() => {
		toggle();
	});

	[value] = result.current;
	expect(value).toBe(false);

	act(() => {
		toggle();
	});

	[value] = result.current;
	expect(value).toBe(true);

	act(() => {
		turnOff();
	});

	[value] = result.current;
	expect(value).toBe(false);
});

test('Should toggle from false to true explicitly', () => {
	const { result } = renderHook(() => useToggle(false));

	let [value, toggle, turnOn] = result.current;

	act(() => {
		toggle();
	});

	[value] = result.current;
	expect(value).toBe(true);

	act(() => {
		toggle();
	});

	[value] = result.current;
	expect(value).toBe(false);

	act(() => {
		turnOn();
	});

	[value] = result.current;
	expect(value).toBe(true);
});

test('Should toggle with params', () => {
	const { result } = renderHook(() => useToggle(false));

	let [value, toggle] = result.current;

	act(() => {
		toggle(true);
	});

	[value] = result.current;
	expect(value).toBe(true);

	act(() => {
		toggle(false);
	});

	[value] = result.current;
	expect(value).toBe(false);

	act(() => {
		toggle("false");
	});

	[value] = result.current;
	expect(value).toBe(true);

	act(() => {
		toggle(1);
	});

	[value] = result.current;
	expect(value).toBe(false);
});