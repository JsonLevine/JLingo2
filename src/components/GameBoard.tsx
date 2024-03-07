import React from 'react'
import './GameBoard.css';
import GuessRow from './GuessRow';
import GuessButton from './GuessButton';

function GameBoard({
  currentRow,
  setCurrentRow,
  currentFocus,
  setCurrentFocus,
  solutionWord,
  setSolutionWord,
  currentGuess,
  setCurrentGuess,
  everyGuess,
  setEveryGuess,
  guessedLetters,
  setGuessedLetters,
  submitGuess,
  gameOver,
  resetGame
}: {
  currentRow: number
  setCurrentRow: Function
  currentFocus: number
  setCurrentFocus: Function
  solutionWord: string
  setSolutionWord: Function
  currentGuess: string[]
  setCurrentGuess: Function
  everyGuess: {letter: string, color: string}[]
  setEveryGuess: Function
  guessedLetters: string[]
  setGuessedLetters: Function
  submitGuess: Function
  gameOver: boolean
  resetGame: Function
}) {
  return (
    <div className='gameBoard'>
        <GuessRow row={0} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessRow row={1} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessRow row={2} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessRow row={3} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessRow row={4} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessRow row={5} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} everyGuess={everyGuess} setEveryGuess={setEveryGuess}/>
        <GuessButton submitGuess={submitGuess} setCurrentGuess={setCurrentGuess} gameOver={gameOver} resetGame={resetGame}/>
    </div>
  )
}

export default GameBoard