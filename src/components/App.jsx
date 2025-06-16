import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Input from "./Input";

function App() {
  const [wordInput, setWordInput] = useState("");
  const [guesses, setGuesses] = useState([]);

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
      <Input
        wordInput={wordInput}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
