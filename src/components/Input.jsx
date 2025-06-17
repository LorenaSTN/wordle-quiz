import PropTypes from "prop-types";
import "../scss/Input.scss"

function Input({ wordInput, handleInput, handleSubmit }) {
  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <input required minLength={5} maxLength={5} className="input" type="text" onChange={handleInput} value={wordInput.toUpperCase()} />
      </form>
    </>
  );
}

export default Input;

Input.propTypes = {
  wordInput: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
