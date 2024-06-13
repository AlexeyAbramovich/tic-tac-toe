import { useContext } from 'react'
import { GameContext } from './Game'

export default function Square(props) {
  const context = useContext(GameContext)
  

  function handleClick(i) {
    if (!context.steps[i] && !context.isGameEnded) {
      const array = Array.from(context.steps)
      if (!context.moveShown) {
        array[i] = context.xIsNext ? 'X' : 'O'
        context.dispatch({type: 'next move'})
      } else {
        array[i] = context.currentPosition % 2 === 0 ? 'O' : 'X'
        context.dispatch({type: 'move shown', valueAfterShownMove: array[i]})
      }

      const newHistory = context.moveShown ? Array.from(context.history.slice(0, context.currentPosition + 1)) : Array.from(context.history)
      newHistory.push(array)
      context.setHistory(newHistory)
      context.setSteps(array)
      context.setCurrentPosition(context.currentPosition + 1)
      context.setMoveShown(false)
    }
  }

  function setTextColor() {
    const result = context.gameResult
    if (!result || context.moveShown && context.currentPosition !== context.history.length-1) {
      return 'black'
    }
    return result.includes(props.id) ? 'green' : 'black'
  }

  return (
    <h1
      style={{ color: setTextColor() }}
      onClick={() => {
        handleClick(props.id)
      }}
    >
      {context.steps[props.id]}
    </h1>
  )
}
