import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useOnMount } from '../.';

const App = () => {
	const [state, setState] = React.useState<number>(0);

	useOnMount(() => {
		setState(s => s + 1);
	});

	return <div>{state}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
