import { useContext } from 'react'
import { GameContext } from '../providers/GameProvider'

export const useGameContext = () => useContext(GameContext)
