import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<HookCakeContainer />
				<CakeContainer />
				<IceCreamContainer />
			</div>
		</Provider>
	);
}

export default App;
