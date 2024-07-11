import React from "react"

function ShowGuess({ guesses }) {
	return (
		<div class="guess-results">
			{guesses.map(({ id, value }) => (
				<p
					class="guess"
					key={id}
				>
					{value}
				</p>
			))}
		</div>
	)
}

export default ShowGuess
