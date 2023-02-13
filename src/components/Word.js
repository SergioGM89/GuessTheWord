import '../CSS/words.css';
import '../CSS/loading.css';
import Letter from "./Letter";

function Word(props) {
    return (
        <div className="words">
            <div className="container ">
                <div className="word">
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                    <Letter />
                </div>
            </div>
        </div>
    )
}

export default Word