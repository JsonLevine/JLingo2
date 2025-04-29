import styles from './GuessRow.module.css';

interface propTypes {
  props: {
    row: number
    currentRow: number
    currentGuess: string[]
    setCurrentGuess: Function
    everyGuess: {letter: string, color: string}[]
  }
}

function GuessRow({
  props 
}: 
  propTypes
) {

  const isCurrentRow = props.row === props.currentRow
  const isGuessedRow = props.row < props.currentRow
  const adjustForRowNumber = props.row*5

  function getColor(letter: {letter: string, color: string}) {
    switch(letter?.color){
      case 'gray':
        return styles.gray;
      case 'green':
        return styles.green;
      case 'yellow':
        return styles.yellow;
      case 'invalid':
        return styles.invalid
      default:
        return null;
    } 
  }

  function handleKeyPress(key: string) {
    console.log(`Key pressed: ${key}`);
  };


  function generateInputs() {

    let inputs = []
    for(let i=0; i<5; i++){
      inputs.push(
        <div className={styles.letterBox} id={'form'+props.row+'_'+i}>
          <input 
            value={isCurrentRow ? (props.currentGuess[i] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber+i]?.letter : '') }
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(i,1,e.target.value))}
            onKeyDown={e => handleKeyPress(e.key)}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumber+i]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_'+i}
            maxLength={1}
          />
         </div>
      )
    }
    return inputs
  }
  
  return (
    <div className={styles.guessRow}>
      {generateInputs()}
    </div>
  )
}

export default GuessRow