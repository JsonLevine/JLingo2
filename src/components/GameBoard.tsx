import './GameBoard.css';
import GuessRow from './GuessRow';
import GuessButton from './GuessButton';

function GameBoard({
  currentRow,
  currentGuess,
  setCurrentGuess,
  everyGuess,
  submitGuess,
  gameOver,
  resetGame,
  endGame
}: {
  currentRow: number
  currentGuess: string[]
  setCurrentGuess: Function
  everyGuess: {letter: string, color: string}[]
  submitGuess: Function
  gameOver: boolean
  resetGame: Function
  endGame: Function
}) {
  const GuessButtonProps = {
    submitGuess: submitGuess,
    setCurrentGuess: setCurrentGuess,
    gameOver: gameOver,
    resetGame: resetGame,
    endGame: endGame
  }

  function generateRows() {
    let rows = []
    for(let i=0; i<5; i++){
      const GuessRowProps = {
        row: i,
        currentRow: currentRow,
        currentGuess: currentGuess,
        setCurrentGuess: setCurrentGuess,
        everyGuess: everyGuess,
      }

      rows.push(
        <GuessRow props={GuessRowProps}/>
      )
    }
    return rows
  }

  return (
    <div className='gameBoard'>
        {generateRows()}
        <GuessButton props={GuessButtonProps}/>
    </div>
  )
}

export default GameBoard