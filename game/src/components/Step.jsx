import { useGameContext } from '../hooks/useGameContext'
import { setTextColor } from '../utils'

export default function Step({ id }) {
	const {
		history,
		setHistory,
		steps,
		setSteps,
		xIsNext,
		dispatch,
		isGameEnded,
		gameResult,
		moveShown,
		setMoveShown,
		currentPosition,
		setCurrentPosition,
	} = useGameContext()

	function handleClick(i) {
		if (!steps[i] && !isGameEnded) {
			const array = Array.from(steps)
			if (!moveShown) {
				array[i] = xIsNext ? 'X' : 'O'
				dispatch({ type: 'next move' })
			} else {
				array[i] = currentPosition % 2 === 0 ? 'O' : 'X'
				dispatch({ type: 'move shown', valueAfterShownMove: array[i] })
			}

			const newHistory = moveShown
				? Array.from(history.slice(0, currentPosition + 1))
				: Array.from(history)
			newHistory.push(array)
			setHistory(newHistory)
			setSteps(array)
			setCurrentPosition(currentPosition + 1)
			setMoveShown(false)
		}
	}

	return (
		<h1
			style={{
				color: setTextColor(
					gameResult,
					moveShown,
					currentPosition,
					history,
					id
				),
			}}
			onClick={() => {
				handleClick(id)
			}}
		>
			{steps[id]}
		</h1>
	)
}
