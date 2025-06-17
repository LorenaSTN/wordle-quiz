import "../scss/Instructions.scss";
import PropTypes from "prop-types";

function Instructions({ handleClose }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <p>
          Guess the <strong>WORDLE</strong> in 6 tries. Each guess must be a
          valid 5-letter word. Hit the enter button to submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <ul>
          <li>
            <strong>Green</strong> - the letter is in the correct spot.
          </li>
          <li>
            <strong>Orange</strong> - the letter is in the word but in the wrong
            spot.
          </li>
          <li>
            <strong>Gray</strong> - the letter is not in the word at all.
          </li>
        </ul>
        <p className="modal-luck"><strong>Good luck!</strong>{" "}<i className="fa-regular fa-face-smile-wink"></i></p>
      </div>
    </div>
  );
}

export default Instructions;


Instructions.propTypes = {
    handleClose: PropTypes.func.isRequired,
}
