import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"

import Guess from "../Guess"

import

function ShowGuess({ guesses }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				<Guess
					key={num}
					value={guesses[num]?.guess || "" || guesses[num]?.[0]}
					answer={a}
				/>
			))}
		</div>
	)
}

export default ShowGuess
