import '../CSS/keyboard.css';
import KeyboardLine from "./KeyboardLine";

function Keyboard(props) {

    const lines = {
        1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        2: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        3: ["↵", "Z", "X", "C", "V", "B", "N", "M", ""]
    };

    return (
        <div className="keyboard">
            {Object.keys(lines).map((line) => (
                <KeyboardLine line={lines[line]} />
            )
            )}
        </div>
    )
}

export default Keyboard