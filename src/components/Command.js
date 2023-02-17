import { useDispatch } from "react-redux";
import { backspace } from "../features/currentWordSlice";

function Command(props) {

    const currentCommand = props.command;

    const dispatch = useDispatch();

    if(currentCommand === "enter"){
    }
    else if(currentCommand === "backspace"){
        return (
            <div className="command " onClick={
                (e) => {
                    dispatch(backspace())
                }}>
                 {currentCommand}
            </div>
        )
    }
}

export default Command