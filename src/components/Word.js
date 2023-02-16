import '../CSS/words.css';
import '../CSS/loading.css';
import Letter from "./Letter";

function Word() {
    return (
        <div className="words">
            <div className="container ">
                <div className="word">
                    <Letter position={0} />
                    <Letter position={1} />
                    <Letter position={2} />
                    <Letter position={3} />
                    <Letter position={4} />
                </div>
            </div>
        </div>
    )
}

export default Word