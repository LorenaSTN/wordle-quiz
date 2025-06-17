import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Game from "./Game";
import Input from "./Input";
import { data } from "./services/data";
import { sample } from "./services/sample";
import Banner from "./Banner"

function App() {
  const [wordInput, setWordInput] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState(sample(data));
  const [banner, setBanner] = useState("playing")

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

    if(wordInput.toUpperCase() === answer){
      setBanner("won")
    } else if (nextWord.length >= 6 ){
      setBanner("lost")
    } else{
      setBanner("playing")
    }
  };


  // funct restart button
    const handleRestart = () => {
    const newAnswer = sample(data)
    setAnswer(newAnswer);
    setGuesses([]);
    setBanner("playing")
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-game">
        <Game guesses={guesses} answer={answer} />
        <Input
          wordInput={wordInput}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
        <Banner banner={banner} guesses={guesses} answer={answer} handleRestart={handleRestart}/>
      </div>
    </div>
  );
}

export default App;
