import Key from "./Key";

function KeyboardLine(props) {

    const line = props.line;
    console.log(line);

    return (

        <div className="keyboard-line">
            {line.map((letter) => (
                    <Key letter={letter} />
                )
                )}
        </div>
    )
}

export default KeyboardLine