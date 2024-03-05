import { useState } from 'react';
import './App.css';
import './Media.css'
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import { gameWords } from './assets/gameWords';
import { dictionaryWords } from './assets/dictionaryWords';

function App() {

  function getSolutionWord() {
    var number = Math.floor(Math.random() * (gameWords.length))
    console.log(gameWords[number]);
    return gameWords[number];
  }

  function validateGuess(guess: string): boolean {
    for(var i =0; i< dictionaryWords.length; i++){
      if(guess == dictionaryWords[i]){
        return true;
      }
    }
    console.log("Invalid guess")
    return false;
  }

  function populateInput(key: string) {
    if(currentGuess[0] == '') setCurrentGuess([key])
    else if (currentGuess.length == 5) {
      currentGuess[4] = key;
      setCurrentGuess(currentGuess)
    } else {
      setCurrentGuess([...currentGuess, key])
    }
    console.log(currentGuess)
  }
  
  const [currentRow, setCurrentRow] = useState(0)
  const [currentFocus, setCurrentFocus] = useState(0)
  const [guessedLetters, setGuessedLetters] = useState(['a','s','t','m'])
  const [greenLetters, setGreenLetters] = useState(['a'])
  const [yellowLetters, setYellowLetters] = useState(['i','s'])
  // const [solutionWord, setSolutionWord] = useState(getSolutionWord())
  const [solutionWord, setSolutionWord] = useState('raise')
  const [currentGuess, setCurrentGuess] = useState([''])

  return (
    <div className="App">
      <GameBoard 
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
        currentFocus={currentFocus}
        setCurrentFocus={setCurrentFocus}
        solutionWord={solutionWord}
        setSolutionWord={setSolutionWord}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
      <Keyboard 
        greenLetters={greenLetters}
        yellowLetters={yellowLetters} 
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        populateInput={populateInput}
      />
    </div>
  );
}

export default App;
