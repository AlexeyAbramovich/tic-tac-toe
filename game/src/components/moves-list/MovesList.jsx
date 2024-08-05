import { useMemo } from 'react'
import { useGameContext } from '../../hooks/useGameContext'
import Move from './move/Move'

export default function MovesList() {
	const { history, setSteps, setCurrentPosition, setMoveShown } =
		useGameContext()

	function showMove(i) {
		setSteps(Array.from(history[i]))
		setCurrentPosition(i)
		setMoveShown(true)
	}

	return (
		<div className='move-outer-wrapper'>
			{useMemo(
				() =>
					history.map((move, i) => (
						<Move key={i} move={move} idx={i} onClick={() => showMove(i)} />
					)),
				[history]
			)}
		</div>
	)
}
