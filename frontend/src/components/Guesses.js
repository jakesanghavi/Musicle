import '../component_styles/guesses_styles.css';

const Guesses = ({ song }) => {
    return (
        <div className="guess-container">
            <li className="left-column">Guess 1:</li>
            <li className='guess-content'>-------</li>
            <li className="left-column">Guess 2:</li>
            <li className='guess-content'>-------</li>
            <li className="left-column">Guess 3:</li>
            <li className='guess-content'>-------</li>
            <li className="left-column">Guess 4:</li>
            <li className='guess-content'>-------</li>
            <li className="left-column">Guess 5:</li>
            <li className='guess-content'>-------</li>
        </div>
    )
}

export default Guesses