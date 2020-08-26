import { FETCH_TODOS, CREATE_TODOS } from '../actions/todoAction';

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
		case CREATE_TODOS:
			console.log(action.payload.data);
			return {
				...state,
				todos: state.todos.concat(action.payload.data)
			};
	}

	return state;
}
