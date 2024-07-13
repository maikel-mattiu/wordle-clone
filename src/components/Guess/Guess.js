/* eslint-disable no-unreachable */
import React from "react"

import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Cell({ letter, status }) {
	// This creates a cell {column} for each of the letter in a guessed word.
	// Each cell is rendered a different colour depending whether it is part of the correct word and its position in the word.
	// They are all rendered green if they match the correct answer.
	const className = status ? `cell ${status}` : "cell"
	return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
	// This displays the guessed word in 5 cells
	const result = checkGuess(value, answer)
	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					key={num}
					letter={result ? result[num].letter : undefined}
					status={result ? result[num].status : undefined}
				/>
			))}
		</p>
	)
}

export default Guess
