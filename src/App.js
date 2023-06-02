import { HomePage } from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	);
}

export default App;
