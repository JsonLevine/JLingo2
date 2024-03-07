import React from 'react'
import styles from './Keyboard.module.css';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean
  greenLetters: string[]
  yellowLetters: string[]
  guessedLetters: string[]
  setGuessedLetters: Function
  disabledLetters: string[]
  populateInput: Function
  gameOver: boolean
}

export default function Keyboard({
  greenLetters,
  yellowLetters,
  guessedLetters,
  setGuessedLetters,
  disabledLetters,
  populateInput,
  disabled = false,
  gameOver
}: KeyboardProps) {

  return (
    <div className={styles.keyboard}>
      {KEYS.map(key => {
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
  )
}