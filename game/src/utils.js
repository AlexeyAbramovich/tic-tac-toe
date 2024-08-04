export function getWinner(steps) {
	const cases = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let c of cases) {
		if (
			steps[c[0]] &&
			steps[c[0]] === steps[c[1]] &&
			steps[c[1]] === steps[c[2]]
		) {
			return c
		}
	}
	return null
}

export function setTextColor(
	gameResult,
	moveShown,
	currentPosition,
	history,
	id
) {
	const result = gameResult
	if (!result || (moveShown && currentPosition !== history.length - 1)) {
		return 'black'
	}
	return result.includes(id) ? 'green' : 'black'
}
