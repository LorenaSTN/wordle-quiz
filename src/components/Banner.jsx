import PropTypes from "prop-types";
import Button from "./Button"
import "../scss/Banner.scss"


function Banner({ banner, guesses, answer, handleRestart }) {
  return (
    <div>
      {banner === "won" && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {" "}
              {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
            </strong>
            .
          </p>
          <Button handleRestart={handleRestart} />
        </div>
      )}

      {banner === "lost" && (
        <div className="banner sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <Button handleRestart={handleRestart} />
        </div>
      )}
    </div>
  );
}

export default Banner;


Banner.propTypes = {
    banner: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired, 
    answer: PropTypes.string.isRequired, 
    handleRestart: PropTypes.func.isRequired,
}