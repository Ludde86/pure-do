export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODOS = 'CREATE_TODOS';

export const fetchTodos = () => {
	return async (dispatch) => {
		// logic to fetch todos from API

		const result = await fetch('http://192.168.2.238:3000/api/todos');

		const resultData = await result.json();

		// console.log('result', result);
		// console.log('resultData', resultData);

		// fetch('http://178.174.204.37:3000/api/todos').then((response) => response.json()).catch((error) => {
		// 	console.error(error);
		// });

		dispatch({
			type: FETCH_TODOS,
			payload: resultData
		});
	};
};
