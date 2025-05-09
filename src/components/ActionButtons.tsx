import './ActionButtons.css';

interface propTypes {
  props: {
    submitGuess : Function
    setCurrentGuess: Function
    gameOver: boolean
    resetGame: Function
    endGame: Function
  }
}

function ActionButtons({
  props 
}: 
  propTypes
) {
  return (
    <>
    { props.gameOver ? 
      <button onClick={() => props.resetGame()} 
        className='resetButton'>Play again?
      </button> :
      <div className='buttons'>
        <button onClick={() => props.submitGuess()} className="guessButton">
          Guess 
        </button>
        <button onClick={() => props.setCurrentGuess([''])} className="clearButton">
          Clear 
        </button>
        <button onClick={() => props.endGame('gaveup')} className="clearButton">
          Give up 
        </button>
      </div>
    }
    </>
  )
}

export default ActionButtons