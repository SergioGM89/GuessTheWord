import Game from './Game';
import '../CSS/game.css';
import { Provider } from "react-redux";
import store from "../features/store";

function App(props) {
    return (
        <Provider store={store}>
            <Game />
        </Provider>
    )
}

export default App