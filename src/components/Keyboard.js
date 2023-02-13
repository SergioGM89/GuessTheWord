import '../CSS/keyboard.css';
import KeyboardLine from "./KeyboardLine";

function Keyboard(props) {
    return (
        <div className="keyboard">
            <KeyboardLine />
            <KeyboardLine />
            <KeyboardLine />
        </div>
    )
}

export default Keyboard