import { FETCH_TODOS } from '../actions/todoAction';

const initialState = {
	todos: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				todos: action.payload
			};
	}

	return state;
}
