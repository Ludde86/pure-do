export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODOS = 'CREATE_TODOS';

export const fetchTodos = () => {
	return async (dispatch) => {
		// logic to fetch todos from API

		const result = await fetch('http://192.168.2.238:3000/api/todos');
		const resultData = await result.json();

		dispatch({
			type: FETCH_TODOS,
			payload: resultData
		});
	};
};

// here we pass in an object, so we use destructoring to pick what we want to use from this object
export const createTodo = ({ description }) => {
	return async (dispatch) => {
		const response = await fetch('http://192.168.2.238:3000/api/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				description
			})
		});

		const responseData = await response.json();

		dispatch({
			type: CREATE_TODOS,
			payload: responseData
		});
	};
};
