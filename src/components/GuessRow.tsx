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
  const adjustForRowNumberForStyle = props.row*5

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
    } return null
  }
  return (
    <div className={styles.guessRow}>
        <div className={styles.letterBox} id={'form'+props.row+'_0'}>
          <input 
            value={isCurrentRow ? (props.currentGuess[0] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber]?.letter : '')}
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(0,1,e.target.value))}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumberForStyle]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_0'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+props.row+'_1'}>
          <input 
            value={isCurrentRow ? (props.currentGuess[1] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber+1]?.letter : '') }
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(1,1,e.target.value))}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumberForStyle+1]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_1'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+props.row+'_2'}>
          <input 
            value={isCurrentRow ? (props.currentGuess[2] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber+2]?.letter : '') }
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(2,1,e.target.value))}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumberForStyle+2]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_2'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+props.row+'_3'}>
          <input 
            value={isCurrentRow ? (props.currentGuess[3] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber+3]?.letter : '') }
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(3,1,e.target.value))}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumberForStyle+3]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_3'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+props.row+'_4'}>
          <input 
            value={isCurrentRow ? (props.currentGuess[4] || '') : (isGuessedRow ? props.everyGuess[adjustForRowNumber+4]?.letter : '') }
            onChange={e => props.setCurrentGuess(props.currentGuess.splice(4,1,e.target.value))}
            disabled={true}
            className={`
            ${isGuessedRow ? getColor(props.everyGuess[adjustForRowNumberForStyle+4]) : styles.inputBox}
            ${isCurrentRow ? styles.currentRow : ''}
            `}
            type="text" 
            id={'input'+props.row+'_4'}
            maxLength={1}
          />
         </div>
    </div>
  )
}

export default GuessRow