import React from 'react'
import './GuessButton.css';

function GuessButton({
  submitGuess,
  setCurrentGuess,
  gameOver,
  resetGame
}: {
  submitGuess : Function
  setCurrentGuess: Function
  gameOver: boolean
  resetGame: Function
}) {

  return (
    <>
    { gameOver ? 
      <button onClick={() => resetGame()} 
        className='resetButton'>Play again?
      </button> :
      <div className='buttons'>
        <button onClick={() => submitGuess()} className="guessButton">
          GUESS 
        </button>
        <button onClick={() => setCurrentGuess([''])} className="clearButton">
          Clear 
        </button>
      </div>
    }
    </>
  )
}

export default GuessButton