import React from 'react'
import './GuessRow.css';

function GuessRow({
  row,
  currentRow,
  setCurrentRow,
  currentFocus,
  setCurrentFocus,
  currentGuess,
  setCurrentGuess,
}:{
  row: number
  currentRow: number
  setCurrentRow: Function
  currentFocus: number
  setCurrentFocus: Function
  currentGuess: string[]
  setCurrentGuess: Function
}) {
  return (
    <div className='guessRow'>
        <div className='letterBox' id={'form'+row+'_0'}>
          <input 
            value={currentGuess[0]}
            onChange={e => setCurrentGuess(currentGuess.splice(0,1,e.target.value))}
            disabled={row!=currentRow}
            className="inputBox"
            type="text" 
            id={'input'+row+'_0'}
            maxLength={1}
          />
         </div>
         <div className='letterBox' id={'form'+row+'_1'}>
          <input 
            value={currentGuess[1]}
            disabled={row!=currentRow}
            className="inputBox"
            type="text" 
            id={'input'+row+'_1'}
            maxLength={1}
          />
         </div>
         <div className='letterBox' id={'form'+row+'_2'}>
          <input 
            value={currentGuess[2]}
            disabled={row!=currentRow}
            className="inputBox"
            type="text" 
            id={'input'+row+'_2'}
            maxLength={1}
          />
         </div>
         <div className='letterBox' id={'form'+row+'_3'}>
          <input 
            value={currentGuess[3]}
            disabled={row!=currentRow}
            className="inputBox"
            type="text" 
            id={'input'+row+'_3'}
            maxLength={1}
          />
         </div>
         <div className='letterBox' id={'form'+row+'_4'}>
          <input 
            value={currentGuess[4]}
            disabled={row!=currentRow}
            className="inputBox"
            type="text" 
            id={'input'+row+'_4'}
            maxLength={1}
          />
         </div>
    </div>
  )
}

export default GuessRow