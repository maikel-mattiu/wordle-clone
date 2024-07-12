import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"

import GuessInput from "../GuessInput"
import ShowGuess from "../ShowGuess"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([])
	const [gameStatus, setGameStatus] = React.useState("running")

	const addGuess = (guess) => {
		const newGuess = { id: crypto.randomUUID(), guess: guess }
		const newGuesses = [...guesses, newGuess]
		setGuesses(newGuesses)

		if (guess.toUpperCase() === answer) {
			setGameStatus("won")
		} else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost")
		}
	}
	return (
		<>
			<ShowGuess
				guesses={guesses}
				answer={answer}
			/>
			<GuessInput
				addGuess={addGuess}
				gameStatus={gameStatus}
			/>
		</>
	)
}

export default Game
