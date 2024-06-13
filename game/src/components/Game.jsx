import React, { useEffect, useReducer, useState } from 'react'
import Field from './Field/Field'
import { getWinner } from '../utility'
import MovesList from './MovesList'
import { reducerXIsNext } from './reducer'

export const GameContext = React.createContext()

export default function Game() {
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
    gameResult,
    moveShown,
    setMoveShown,
    currentPosition,
    setCurrentPosition
  }

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
    <GameContext.Provider value={context}>
      <div className="wrapper">
        <Field />
        <div className="info">
          <button
            className="restart"
            onClick={() => {
              setHistory([])
              setSteps(Array(9).fill(null))
              dispatch({type: 'restart'})
              setIsGameEnded(false)
              setGameResult(null)
              setMoveShown(false)
              setCurrentPosition(0)
            }}
          >
            Restart
          </button>
          {draw() && <h2 className="draw">Ничья</h2>}
          <MovesList/>
        </div>
      </div>
    </GameContext.Provider>
  )
}
