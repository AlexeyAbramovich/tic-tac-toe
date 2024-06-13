import { useContext } from 'react'
import { GameContext } from './Game'

export function reducerXIsNext(state, action) {
//   const context = useContext(GameContext)
  switch (action.type) {
    case 'next move':
      return !state
    case 'move shown':
      return action.valueAfterShownMove === 'X' ? false : true
    case 'restart':
      return true
    default:
      return state
  }
}
