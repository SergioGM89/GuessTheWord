import Key from "./Key";

function KeyboardLine(props) {

    const line = props.line;

    return (

        <div className="keyboard-line">
            {line.map((currentKey) => (
                    <Key currentKey={currentKey} key={currentKey}/>
                )
                )}
        </div>
    )
}

export default KeyboardLine