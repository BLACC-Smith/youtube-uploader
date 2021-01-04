import Home from './components/organisms/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reroute from './components/organisms/Reroute';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/discord">
					<Reroute />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
