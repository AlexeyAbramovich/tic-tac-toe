import { useContext } from 'react'
import { GameContext } from './Game'

export default function MovesList() {
  const context = useContext(GameContext)

  function showMove(i) {
    context.setSteps(Array.from(context.history[i]))
    context.setCurrentPosition(i)
    context.setMoveShown(true)
  }

  return (
    <div className="step-outer-wrapper">
      {context.history.map((step, i) => (
        <div key={i} className="step-inner-wrapper" onClick={() => showMove(i)}>
          <h4>{i + 1}</h4>
          <div className="step">
            {step.map((move, index) => (
              <h3 key={index}>{move}</h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
