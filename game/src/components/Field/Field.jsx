import { useMemo } from 'react'
import { useGameContext } from '../../hooks/useGameContext'
import Step from '../Step'
import classes from './Field.module.css'

export default function Field() {
	const { steps } = useGameContext()

	return (
		<div className={classes.container}>
			<div className={classes.field}>
				{useMemo(() => steps.map((_, i) => <Step id={i} key={i} />, [steps]))}
			</div>
		</div>
	)
}
