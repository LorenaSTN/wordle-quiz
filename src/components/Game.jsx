import PropTypes from "prop-types";
import { range } from "./services/range"
import GuessResult from "./GuessResult"
import "../scss/Game.scss"

function Game({guesses, answer}) {
  return (
    <> 
    <div className="game-results"> {range(6).map((num) => (
    <GuessResult key={num} value={guesses[num]} answer={answer}/>
    ))}
    </div>
    
    </>
  )
}

export default Game

Game.propTypes = {
    guesses: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired
}