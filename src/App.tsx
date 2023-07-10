import { HomePage } from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import React from 'react';

function App() {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
}

export default App;
