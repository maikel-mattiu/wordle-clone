import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"

import GuessInput from "../GuessInput"
import ShowGuess from "../ShowGuess"
import WonBanner from "../WonBanner"
import LostBanner from "../LostBanner"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([]) // An array of the user guesses
	const [gameStatus, setGameStatus] = React.useState("running") // The current status of the game; running, won or lost

	const addGuess = (guess) => {
		// Adds a new guess object to the guesses array
		const newGuess = { id: crypto.randomUUID(), guess: guess }
		const newGuesses = [...guesses, newGuess]
		setGuesses(newGuesses)
		// Check if the game is won or lost
		// If the guess is correct, set the game status to "won"
		// If the guess is incorrect and the user has run out of guesses, set the game status to "lost"
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
			{gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</>
	)
}

export default Game
