import Word from "./Word";
import Keyboard from "./Keyboard";
import Error from "./Error";
import '../CSS/game.css';

function Game(props) {
    return (
        <div className="game">
            <div className="board">
                <h1>Adivina la palabra</h1>
                <Word />
                <Keyboard />
                <Error />
            </div>
        </div>
    )
}

export default Game