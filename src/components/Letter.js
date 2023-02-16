import '../CSS/letter.css';
import { useDispatch, useSelector } from "react-redux";
import store from '../features/store';
import {selected, contain} from '../features/wordSlice';
import { useEffect } from "react";

function Letter(props) {
    const position = props.position;

    useEffect(() => {
       
    }, [selectedLetter]);

    const dispatch = useDispatch();
    const selectedLetter = useSelector(state => state.currentWord.selected[position]);
    const letter = useSelector(state => state.currentWord.contain[position]);
    return (
        <div className="letter">
            <div className={`slot ${selectedLetter? "selected":""}`} onClick={(e)=> {dispatch(selected(position))}}>
                <p>{letter}</p>
            </div>
        </div>
    )
}

export default Letter