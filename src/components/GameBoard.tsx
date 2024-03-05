import React from 'react'
import './GameBoard.css';
import GuessRow from './GuessRow';
import ResetButton from './ResetButton';

function GameBoard({
  currentRow,
  setCurrentRow,
  currentFocus,
  setCurrentFocus,
  solutionWord,
  setSolutionWord,
  currentGuess,
  setCurrentGuess,
  guessedLetters,
  setGuessedLetters,
}: {
  currentRow: number
  setCurrentRow: Function
  currentFocus: number
  setCurrentFocus: Function
  solutionWord: string
  setSolutionWord: Function
  currentGuess: string[]
  setCurrentGuess: Function
  guessedLetters: string[]
  setGuessedLetters: Function
}) {
  return (
    <div className='gameBoard'>
        <GuessRow row={0} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <GuessRow row={1} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <GuessRow row={2} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <GuessRow row={3} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <GuessRow row={4} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <GuessRow row={5} currentRow={currentRow} setCurrentRow={setCurrentRow} currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>
        <ResetButton />
    </div>
  )
}

export default GameBoard