import { useRef, useState } from 'react';
import './App.css';
import './Media.css'
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import { gameWords } from './assets/gameWords';
import { dictionaryWords } from './assets/dictionaryWords';

function App() {

  const [currentRow, setCurrentRow] = useState(0)
  const currentRowRef = useRef(0)
  const [currentFocus, setCurrentFocus] = useState(0)
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [disabledLetters, setDisabledLetters] = useState([''])
  const [greenLetters, setGreenLetters] = useState([''])
  const [yellowLetters, setYellowLetters] = useState([''])
  const [solutionWord, setSolutionWord] = useState(() => getSolutionWord())
  const [currentGuess, setCurrentGuess] = useState([''])
  const [everyGuess, setEveryGuess] = useState([{letter: '', color: ''}].splice(0,0))
  const [gameOver, setGameOver] = useState(false)
  /*
      first word(0-4)    second word(5-9)...10-14,15-19,20-24,25-29 
  ['a','a','a','a','a','b','b','b','b','b']
  */


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
    console.log("Invalid guess: " + guess)
    return false;
  }

  function populateInput(key: string) {
    if(currentGuess[0] == '') setCurrentGuess([key])
    else if (currentGuess.length == 5) {
      setCurrentGuess([currentGuess[0],currentGuess[1],currentGuess[2],currentGuess[3],key])
    } else {
      setCurrentGuess([...currentGuess, key])
    }
  }

  function submitGuess() {
    // console.log("Submitting guess: ")
    // console.log("Current Guess:")
    // console.log(currentGuess)
    if (!validateGuess(currentGuess.join(''))) {
      console.log("Invalid word")
      return null
    }

    let solutionArray = solutionWord.split('')
    let newGreenLetters = [''].splice(0,0)
    let newYellowLetters = [''].splice(0,0)
    let newGuessedLetters = [''].splice(0,0)
    let newEveryGuess = [{letter: '', color: ''}].splice(0,0)
    let correctLetters = 0

    for(let i=0;i<5;i++) {
      if (solutionArray[i] === currentGuess[i]) {
        newGreenLetters.push(currentGuess[i])
        newEveryGuess.push({letter: currentGuess[i], color: 'green'})
        correctLetters++
      } else if(currentGuess[i] === solutionArray[0] || currentGuess[i] === solutionArray[1] || currentGuess[i] === solutionArray[2] || currentGuess[i] === solutionArray[3] || currentGuess[i] === solutionArray[4]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess.push({letter: currentGuess[i], color: 'yellow'})
      } else {
        newGuessedLetters.push(currentGuess[i])
        newEveryGuess.push({letter: currentGuess[i], color: 'gray'})
      }
    }
      setGreenLetters(greenLetters.concat(newGreenLetters));
      setYellowLetters(yellowLetters.concat(newYellowLetters));
      setGuessedLetters(guessedLetters.concat(newGuessedLetters));
      currentRowRef.current++;
      setCurrentRow(currentRowRef.current)
      setEveryGuess(everyGuess.concat(newEveryGuess))
      setCurrentGuess([''])
      if(correctLetters === 5) {
        console.log("Winner")
        endGame(true)
      } else if (currentRowRef.current == 6){
        console.log("Loser")
        endGame(false)
      }
  }
  
  function endGame(isWinner: boolean){
    if(isWinner) {
      // Sets the row in between the winning row and the next so none are valid
      currentRowRef.current -=.5;
      setCurrentRow(currentRowRef.current)
      // Invalidate the keyboard
      let allKeys=[
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]
      setDisabledLetters(allKeys)
      setGameOver(true)
    } else {
      setGameOver(true)
    }
  }

  function resetGame(){
    setCurrentRow(0)
    currentRowRef.current = 0
    setGuessedLetters([''])
    setGreenLetters([''])
    setYellowLetters([''])
    setSolutionWord(() => getSolutionWord())
    setCurrentGuess([''])
    setEveryGuess([{letter: '', color: ''}].splice(0,0))
    setDisabledLetters([''])
  }

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
        everyGuess={everyGuess}
        setEveryGuess={setEveryGuess}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        submitGuess={submitGuess}
        gameOver={gameOver}
        resetGame={resetGame}
      />
      <Keyboard 
        greenLetters={greenLetters}
        yellowLetters={yellowLetters} 
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        disabledLetters={disabledLetters}
        populateInput={populateInput}
        gameOver={gameOver}
      />
    </div>
  );
}

export default App;
