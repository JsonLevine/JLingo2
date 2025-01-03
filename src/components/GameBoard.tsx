import './GameBoard.css';
import GuessRow from './GuessRow';
import ActionButtons from './ActionButtons';

interface propTypes {
  props: {
    numberOfGuesses: number
    currentRow: number
    currentGuess: string[]
    setCurrentGuess: Function
    everyGuess: {letter: string, color: string}[]
    submitGuess: Function
    gameOver: boolean
    resetGame: Function
    endGame: Function
  }
}

function GameBoard({
  props
}: 
  propTypes
) {

  const ActionButtonsProps = {
    submitGuess: props.submitGuess,
    setCurrentGuess: props.setCurrentGuess,
    gameOver: props.gameOver,
    resetGame: props.resetGame,
    endGame: props.endGame
  }

  function generateRows() {
    let rows = []
    for(let i=0; i<props.numberOfGuesses; i++){
      const GuessRowProps = {
        row: i,
        currentRow: props.currentRow,
        currentGuess: props.currentGuess,
        setCurrentGuess: props.setCurrentGuess,
        everyGuess: props.everyGuess,
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
        <ActionButtons props={ActionButtonsProps}/>
    </div>
  )
}

export default GameBoard