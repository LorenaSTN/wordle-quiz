import PropTypes from "prop-types";

function Input({ wordInput, handleInput, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={wordInput} />
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
