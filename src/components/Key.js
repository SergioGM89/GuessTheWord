import { useDispatch, useSelector } from "react-redux";
import { letter, backspace } from "../features/currentWordSlice";
import wordFetch from "../features/checkWordThunks";


function Key(props) {

    const currentKey = props.currentKey;
    const word = useSelector(state => state.currentWord.letters.join(''));

    const dispatch = useDispatch();
    const isEnter = () => currentKey === "enter";

    if(currentKey.length > 1){
        return (
            <div className="command" onClick={
                (e) => {
                    dispatch((isEnter())? wordFetch(word) : backspace())
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