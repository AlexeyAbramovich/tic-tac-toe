import React, { useEffect } from 'react'
import { useGameContext } from '../hooks/useGameContext'
import { getWinner } from '../utils'
import Field from './field/Field'
import MovesList from './moves-list/MovesList'

export default function Game() {
	const {
		setHistory,
		steps,
		setSteps,
		dispatch,
		isGameEnded,
		setIsGameEnded,
		setGameResult,
		setMoveShown,
		setCurrentPosition,
	} = useGameContext()

	useEffect(() => {
		const result = getWinner(steps)
		if (result) {
			setIsGameEnded(true)
			setGameResult(result)
		}
	}, [steps])

	function draw() {
		return !isGameEnded && !steps.includes(null) ? true : false
	}

	return (
		<div className='wrapper'>
			<Field />
			<div className='info'>
				<button
					className='restart'
					onClick={() => {
						setHistory([])
						setSteps(Array(9).fill(null))
						dispatch({ type: 'restart' })
						setIsGameEnded(false)
						setGameResult(null)
						setMoveShown(false)
						setCurrentPosition(0)
					}}
				>
					Restart
				</button>
				{draw() && <h2 className='draw'>Ничья</h2>}
				<MovesList />
			</div>
		</div>
	)
}
