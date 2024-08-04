export function reducerXIsNext(state, action) {
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
