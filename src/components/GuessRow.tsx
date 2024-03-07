import React from 'react'
import styles from './GuessRow.module.css';

function GuessRow({
  row,
  currentRow,
  setCurrentRow,
  currentFocus,
  setCurrentFocus,
  currentGuess,
  setCurrentGuess,
  everyGuess,
  setEveryGuess,
}:{
  row: number
  currentRow: number
  setCurrentRow: Function
  currentFocus: number
  setCurrentFocus: Function
  currentGuess: string[]
  setCurrentGuess: Function
  everyGuess: {letter: string, color: string}[]
  setEveryGuess: Function
}) {

  const isCurrentRow = row === currentRow
  const isGuessedRow = row < currentRow
  const adjustForRowNumber = row*5
  const adjustForRowNumberForStyle = row*5

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
        <div className={styles.letterBox} id={'form'+row+'_0'}>
          <input 
            value={isCurrentRow ? (currentGuess[0] || '') : everyGuess[adjustForRowNumber]?.letter }
            onChange={e => setCurrentGuess(currentGuess.splice(0,1,e.target.value))}
            disabled={row!=currentRow}
            className={`${isGuessedRow ? getColor(everyGuess[adjustForRowNumberForStyle]) : styles.inputBox}`}
            type="text" 
            id={'input'+row+'_0'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+row+'_1'}>
          <input 
            value={isCurrentRow ? (currentGuess[1] || '') : everyGuess[adjustForRowNumber+1]?.letter }
            onChange={e => setCurrentGuess(currentGuess.splice(1,1,e.target.value))}
            disabled={row!=currentRow}
            className={`${isGuessedRow ? getColor(everyGuess[adjustForRowNumberForStyle+1]) : styles.inputBox}`}
            type="text" 
            id={'input'+row+'_1'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+row+'_2'}>
          <input 
            value={isCurrentRow ? (currentGuess[2] || '') : everyGuess[adjustForRowNumber+2]?.letter }
            onChange={e => setCurrentGuess(currentGuess.splice(2,1,e.target.value))}
            disabled={row!=currentRow}
            className={`${isGuessedRow ? getColor(everyGuess[adjustForRowNumberForStyle+2]) : styles.inputBox}`}
            type="text" 
            id={'input'+row+'_2'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+row+'_3'}>
          <input 
            value={isCurrentRow ? (currentGuess[3] || '') : everyGuess[adjustForRowNumber+3]?.letter }
            onChange={e => setCurrentGuess(currentGuess.splice(3,1,e.target.value))}
            disabled={row!=currentRow}
            className={`${isGuessedRow ? getColor(everyGuess[adjustForRowNumberForStyle+3]) : styles.inputBox}`}
            type="text" 
            id={'input'+row+'_3'}
            maxLength={1}
          />
         </div>
         <div className={styles.letterBox} id={'form'+row+'_4'}>
          <input 
            value={isCurrentRow ? (currentGuess[4] || '') : everyGuess[adjustForRowNumber+4]?.letter }
            onChange={e => setCurrentGuess(currentGuess.splice(4,1,e.target.value))}
            disabled={row!=currentRow}
            className={`${isGuessedRow ? getColor(everyGuess[adjustForRowNumberForStyle+4]) : styles.inputBox}`}
            type="text" 
            id={'input'+row+'_4'}
            maxLength={1}
          />
         </div>
    </div>
  )
}

export default GuessRow