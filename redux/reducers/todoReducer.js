import { FETCH_TODOS } from '../actions/todoAction';

const initState = {
	todos: []
};

export default function(state = initState, action) {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				todos: action.payload
			};
		default:
			return state;
	}
}
