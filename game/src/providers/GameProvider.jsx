import { createContext, useReducer, useState } from 'react'
import { reducerXIsNext } from '../components/reducer'

export const GameContext = createContext()

const GameProvider = ({ children }) => {
	const [history, setHistory] = useState([])
	const [steps, setSteps] = useState(Array(9).fill(null))
	const [xIsNext, dispatch] = useReducer(reducerXIsNext, true)
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [gameResult, setGameResult] = useState(null)
	const [moveShown, setMoveShown] = useState(false)
	const [currentPosition, setCurrentPosition] = useState(0)

	const context = {
		history,
		setHistory,
		steps,
		setSteps,
		xIsNext,
		dispatch,
		isGameEnded,
		setIsGameEnded,
		gameResult,
		setGameResult,
		moveShown,
		setMoveShown,
		currentPosition,
		setCurrentPosition,
	}

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>
}

export default GameProvider
