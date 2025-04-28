import { useRef, useState } from 'react';
import './App.css';
import './Media.css'
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import { gameWords } from './assets/gameWords';
import { dictionaryWords } from './assets/dictionaryWords';
import { allKeys } from './assets/allKeys';

function App() {

  const [currentRow, setCurrentRow] = useState(0)
  const currentRowRef = useRef(0)
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [disabledLetters, setDisabledLetters] = useState([''])
  const [greenLetters, setGreenLetters] = useState([''])
  const [yellowLetters, setYellowLetters] = useState([''])
  const [solutionWord, setSolutionWord] = useState(() => getSolutionWord())
  const [currentGuess, setCurrentGuess] = useState([''])
  const [everyGuess, setEveryGuess] = useState([{letter: '', color: ''}].splice(0,0))
  const [gameOver, setGameOver] = useState(false)
  const numberOfGuesses = 5;

  function getSolutionWord() {
    var number = Math.floor(Math.random() * (gameWords.length))
    // Log the solution word to the console for testing
    console.log(gameWords[number]);
    return gameWords[number];
  }

  function validateGuess(guess: string): boolean {
    for(var i =0; i< dictionaryWords.length; i++){
      if(guess === dictionaryWords[i]){
        return true;
      }
    }
    console.log("Invalid guess: " + guess)
    return false;
  }

  function populateInput(key: string) {
    if(currentGuess[0] === '') setCurrentGuess([key])
      // If the current guess is full, replace the last letter
    else if (currentGuess.length === 5) {
      setCurrentGuess([currentGuess[0],currentGuess[1],currentGuess[2],currentGuess[3],key])
    } else { 
      // Otherwise, add the letter to the end
      setCurrentGuess([...currentGuess, key])
    }
  }

  function submitGuess() {
    // If the guess is not a valid word, alert the user and return
    if (!validateGuess(currentGuess.join(''))) {
      alert("Sorry, '" + currentGuess.join('') + "' is not a valid word")
      return null
    }

    let solutionArray = solutionWord.split('')
    let newGreenLetters = [''].splice(0,0)
    let newYellowLetters = [''].splice(0,0)
    let newGuessedLetters = [''].splice(0,0)
    let newEveryGuess = [{letter: '', color: ''}]
    let correctLetters = 0

    for(let i=0;i<5;i++) {
      // If the letter is in the correct spot, add it to the greenLetters array
      // Replace the letter in the solutionArray with a * so it doesn't get counted again
      if (solutionArray[i] === currentGuess[i]) {
        newGreenLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'green'}
        solutionArray[i] = '*'
        correctLetters++
      }
    }

    for(let i=0;i<5;i++) {
      if(solutionArray[i] === '*') {
        // If the letter is already green, skip it
      }
      // If the letter is in the solutionArray, but not in the correct spot, add it to the yellowLetters array
      else if(currentGuess[i] === solutionArray[0]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'yellow'}
        solutionArray[0] = ' '
      } 
      else if(currentGuess[i] === solutionArray[1]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'yellow'}
        solutionArray[1] = ' '
      }
      else if(currentGuess[i] === solutionArray[2]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'yellow'}
        solutionArray[2] = ' '
      }
      else if(currentGuess[i] === solutionArray[3]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'yellow'}
        solutionArray[3] = ' '
      }
      else if(currentGuess[i] === solutionArray[4]) {
        newYellowLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'yellow'}
        solutionArray[4] = ' '
      } else {
        newGuessedLetters.push(currentGuess[i])
        newEveryGuess[i] = {letter: currentGuess[i], color: 'gray'}
      }
    }
    // Add the new letters to the state
    setGreenLetters(greenLetters.concat(newGreenLetters));
    setYellowLetters(yellowLetters.concat(newYellowLetters));
    setGuessedLetters(guessedLetters.concat(newGuessedLetters));

    // Move to the next row
    currentRowRef.current++;
    setCurrentRow(currentRowRef.current)

    setEveryGuess(everyGuess.concat(newEveryGuess))
    setCurrentGuess([''])

    if(correctLetters === 5) {
      endGame('winner')
    } else if (currentRowRef.current === numberOfGuesses){
      endGame('loser')
    }
  }
  
  function endGame(reason: string){
    switch(reason){
      case 'winner':
        // Sets the row in between the winning row and the next so none are valid
        currentRowRef.current -=.5;
        break;
      case 'loser':
        // Populate the current row with the correct word
        setCurrentGuess(solutionWord.split(''))
        // Subtract one from the row so we don't go beyond the last row
        currentRowRef.current -=1;
        break;
      case 'gaveup':
        // Populate the current row with the correct word
        setCurrentGuess(solutionWord.split(''))
        break;
      default:
        break;
    }
    setCurrentRow(currentRowRef.current)
    setGameOver(true)

    // Invalidate the keyboard
    setDisabledLetters(allKeys)
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
    setGameOver(false)
  }

  const GameBoardProps = {
    numberOfGuesses: numberOfGuesses,
    currentRow: currentRow,
    currentGuess: currentGuess,
    setCurrentGuess: setCurrentGuess,
    everyGuess: everyGuess,
    submitGuess: submitGuess,
    gameOver: gameOver,
    resetGame: resetGame,
    endGame: endGame
  }

  const KeyboardProps = {
    isMobile: false,
    greenLetters: greenLetters,
    yellowLetters: yellowLetters, 
    guessedLetters: guessedLetters,
    currentGuess: currentGuess,
    setCurrentGuess: setCurrentGuess,
    disabledLetters: disabledLetters,
    populateInput: populateInput,
  }

  const MobileKeyboardProps = {
    isMobile: true,
    greenLetters: greenLetters,
    yellowLetters: yellowLetters, 
    guessedLetters: guessedLetters,
    currentGuess: currentGuess,
    setCurrentGuess: setCurrentGuess,
    disabledLetters: disabledLetters,
    populateInput: populateInput,
  }

  return (
    <div className="App">
      <GameBoard props={GameBoardProps}/>
      <Keyboard props={KeyboardProps}/>
      <Keyboard props={MobileKeyboardProps}/>
    </div>
  );
}

export default App;
