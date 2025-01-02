import styles from './Keyboard.module.css';
import arrowIcon from '../assets/arrow.png'

const KEYSROW1 = ['q','w','e','r','t','y','u','i','o','p']
const KEYSROW2 = ['a','s','d','f','g','h','j','k','l']
const KEYSROW3 = ['z','x','c','v','b','n','m']

type KeyboardProps = {
  disabled?: boolean
  greenLetters: string[]
  yellowLetters: string[]
  guessedLetters: string[]
  setGuessedLetters: Function
  currentGuess: string[]
  setCurrentGuess: Function
  disabledLetters: string[]
  populateInput: Function
  gameOver: boolean
}

export default function Keyboard({
  greenLetters,
  yellowLetters,
  guessedLetters,
  currentGuess,
  setCurrentGuess,
  disabledLetters,
  populateInput,
}: KeyboardProps) {

  function backspace(){
    if(currentGuess.length > 0) {
      let currentInput = currentGuess.length-1;
      console.log(currentInput)
      let newGuess = []
      for(let i=0; i<currentInput; i++ ){
          newGuess[i] = currentGuess[i]
      }
      setCurrentGuess(newGuess)
    }
  }

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        {KEYSROW1.map(key => {
          const isGreen = greenLetters.includes(key)
          const isYellow = yellowLetters.includes(key)
          const isInactive = guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = disabledLetters.includes(key)
          return (
            <button
              onClick={() => populateInput(key)}
              className={`
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div className={styles.keyboardRow}>
        {KEYSROW2.map(key => {
          const isGreen = greenLetters.includes(key)
          const isYellow = yellowLetters.includes(key)
          const isInactive = guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = disabledLetters.includes(key)
          return (
            <button
              onClick={() => populateInput(key)}
              className={`
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
            >
              {key}
            </button>
          )
        })}
      </div>
      <div className={styles.keyboardRow}>
        {KEYSROW3.map(key => {
          const isGreen = greenLetters.includes(key)
          const isYellow = yellowLetters.includes(key)
          const isInactive = guessedLetters.includes(key) && !isGreen && !isYellow
          const isDisabled = disabledLetters.includes(key)
          return (
            <button
              onClick={() => populateInput(key)}
              className={`
              ${styles.btn} 
              ${isGreen ? styles.green : ""} 
              ${isYellow ? styles.yellow : ""} 
              ${isInactive ? styles.inactive : ""}
              ${isDisabled ? styles.disabled : ""}
              `}
              key={key}
            >
              {key}
            </button>
          )
        })}
        <button onClick={() => backspace()} className={`
        ${styles.btn} 
        ${styles.backspace}
        ${disabledLetters.length > 1 ? styles.disabled : ''}
        `}><img src={arrowIcon}></img></button>
      </div>
    </div>
  )
}