import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"

import Guess from "../Guess"

function ShowGuess({ guesses, answer }) {
	//Create the game board made up of 6 NUM_OF_GUESSES_ALLOWED rows
	// Each row is rendered with a Guess component
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				// For each row, render a Guess component
				<Guess
					key={num}
					value={guesses[num]?.guess || ""}
					answer={answer}
				/>
			))}
		</div>
	)
}

export default ShowGuess
