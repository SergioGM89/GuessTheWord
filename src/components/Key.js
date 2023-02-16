import { useDispatch } from "react-redux";
import { contain } from "../features/wordSlice";

function Key(props) {

    const letter = props.letter;
    console.log(letter);

    const dispatch = useDispatch();

    return (
        <div className="key " onClick={
            (e) => {
                dispatch(contain(letter))
            }}>
             {letter}
        </div>
    )
}

export default Key