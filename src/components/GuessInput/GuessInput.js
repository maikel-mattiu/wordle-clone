import React from "react"

function GuessInput({ addGuess, gameStatus }) {
	const [guess, setGuess] = React.useState("")

	function handleSubmit(event) {
		event.preventDefault()
		if (guess.length !== 5) {
			alert("Please enter a 5-letter word")
			return
		}
		addGuess(guess)
		console.log({ guess })
		setGuess("")
	}

	return (
		<>
			<p className="game-status">{gameStatus}</p>
			<form
				className="guess-input-wrapper"
				onSubmit={handleSubmit}
			>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					required
					disabled={gameStatus === "won" || gameStatus === "lost"}
					minLength={5}
					maxLength={5}
					id="guess-input"
					type="text"
					value={guess}
					onChange={(event) => {
						const newGuess = event.target.value.toUpperCase()
						setGuess(newGuess)
					}}
				/>
			</form>
		</>
	)
}

export default GuessInput
