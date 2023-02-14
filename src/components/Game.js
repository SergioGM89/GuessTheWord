import Word from "./Word";
import Keyboard from "./Keyboard";
import Error from "./Error";
import '../CSS/game.css';
import { Provider } from "react-redux";
import store from "../features/store";
import { useDispatch, useSelector } from "react-redux";
import idFetch from "../features/thunks";

function Game() {
    const id = useSelector(state => state.nombre.id);
    const dispatch = useDispatch();
    
    async function handledDispatch() {
        dispatch(idFetch());
    }

    document.body.onload = () => {handledDispatch()};

    return (
        <Provider store={store}>
            <div className="game">
                <div className="board">
                    <h1>Adivina la palabra</h1>
                    <Word />
                    <Keyboard />
                    <Error />
                </div>
            </div>
        </Provider>
    )
}

export default Game;