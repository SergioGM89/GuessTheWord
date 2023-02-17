import { useDispatch } from "react-redux";
import { letter, backspace } from "../features/wordSlice";

function Key(props) {

    const currentKey = props.currentKey;

    const dispatch = useDispatch();
    const isEnter = () => currentKey === "enter";

    if(currentKey.length > 1){
        return (
            <div className="command" onClick={
                (e) => {
                    dispatch((isEnter())?"loquesea": backspace())
                }}>
                 {isEnter()?"↵":"⌫"}
            </div>
        )
    }else{
        return (
            <div className="key" onClick={
                (e) => {
                    dispatch(letter(currentKey))
                }}>
                 {currentKey}
            </div>
        )
    }
}

export default Key