import { useContext } from 'react'
import Square from '../Square'
import classes from './Field.module.css'
import { GameContext } from '../Game'

export default function Field() {
  const context = useContext(GameContext)

  return (
    <div className={classes.container}>
      <div className={classes.field}>
        {context.steps.map((_, i) => (
          <Square id={i} key={i}/>
        ))}
      </div>
    </div>
  )
}
