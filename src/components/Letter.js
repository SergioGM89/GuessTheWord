import '../CSS/letter.css';
import { useDispatch, useSelector } from "react-redux";
import store from '../features/store';
import {press, letter} from '../features/wordSlice';
import { useEffect } from "react";

function Letter(props) {
    const currentPosition = props.position;

    function isSelected(){
        const selectedLetter = useSelector(state => state.currentWord.selected);
        return selectedLetter === currentPosition;
    }

    const dispatch = useDispatch();
    const currentLetter = useSelector(state => state.currentWord.letters[currentPosition]);
    return (
        <div className="letter">
            <div className={`slot ${isSelected()? "selected":""}`} onClick={(e)=> {dispatch(press(currentPosition))}}>
                <p>{currentLetter}</p>
            </div>
        </div>
    )
}

export default Letter