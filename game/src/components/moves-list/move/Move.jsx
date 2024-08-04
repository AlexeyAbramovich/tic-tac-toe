import styles from './Move.module.css'

const Move = ({ move, idx, onClick }) => {
	return (
		<div className={styles.moveInnerWrapper} onClick={onClick}>
			<h4>{idx + 1}</h4>
			<div className={styles.move}>
				{move.map((move, index) => (
					<h3 key={index}>{move}</h3>
				))}
			</div>
		</div>
	)
}

export default Move
