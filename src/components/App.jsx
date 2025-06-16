import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Game from "./Game"
import Input from "./Input";
import { data } from "./services/data";
import { sample } from "./services/sample"

function App() {
  const [wordInput, setWordInput] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [answer] = useState(sample(data));

  // funct. input change
  const handleInput = (ev) => {
    setWordInput(ev.target.value);
  };

  // funct. submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (wordInput.length < 5 || wordInput.length > 5) {
      window.alert("Please provide a word of 5 letters");
      return;
    }
    const nextWord = [...guesses, wordInput];
    setGuesses(nextWord);
    setWordInput("");
  };

  return (
    <>
      <Header />
      <Game guesses={guesses} answer={answer} />
      <Input
        wordInput={wordInput}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
