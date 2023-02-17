import Word from "./Word";
import Keyboard from "./Keyboard";
import Error from "./Error";
import '../CSS/game.css';
import store from "../features/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import idFetch from "../features/thunks";
import { useEffect } from "react";

function Game() {
    const id = useSelector(state => state.game.id);
    const errorId = useSelector(state => state.game.error);
    const dispatch = useDispatch();

    useEffect(() => {
        async function load() {
            dispatch(idFetch())
        }
        load();
    }, []);

    return (
        <Provider store={store}>
            <div className="game">
                {errorId && <div className="message">{`Error initializing game: ${errorId}`}</div>}
                <div className="board">
                    <h1>Adivina la palabra</h1>
                    <div className="words">
                        <div className="container ">
                        <Word />
                    </div>
                </div>
                <Keyboard />
                <Error />
            </div>
        </div>
        </Provider >
    )
}

export default Game;