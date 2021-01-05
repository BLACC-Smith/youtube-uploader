import AppContainer from './components/organisms/AppContainer';
import AuthContextProvider from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<AppContainer />
		</AuthContextProvider>
	);
}

export default App;
