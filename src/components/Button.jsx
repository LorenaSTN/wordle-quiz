import PropTypes from "prop-types";
import "../scss/Button.scss";

function Button({ handleRestart }) {
  return (
    <button className="button" onClick={handleRestart}>
      {" "}
      Restart game
    </button>
  );
}

export default Button;

Button.propTypes = {
  handleRestart: PropTypes.func.isRequired,
};
