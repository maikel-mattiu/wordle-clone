import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"

import GuessInput from "../GuessInput"
import ShowGuess from "../ShowGuess"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([])

	const addGuess = (guess) => {
		const newGuess = { id: crypto.randomUUID(), guess: guess }
		setGuesses([...guesses, newGuess])
	}
	return (
		<>
			<ShowGuess
				guesses={guesses}
				answer={answer}
			/>
			<GuessInput addGuess={addGuess} />
		</>
	)
}

export default Game
