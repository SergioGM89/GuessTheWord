import { useSelector } from 'react-redux';
import '../CSS/error.css';


function Error(props) {

    const error = useSelector(state => state.error.error);

    return (
        <div className="error">
            <div className="overlay"></div>
            <div>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default Error