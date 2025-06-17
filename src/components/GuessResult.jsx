import { range } from "./services/range";
import { checkGuess } from "./services/checkGuess";
import PropTypes from "prop-types";
import "../scss/GuessResult.scss";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function GuessResult({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </div>
  );
}

export default GuessResult;

GuessResult.propTypes = {
  value: PropTypes.string,
  answer: PropTypes.string.isRequired,
};

Cell.propTypes = {
  letter: PropTypes.string,
  status: PropTypes.string,
};
