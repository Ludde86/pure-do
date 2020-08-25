export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODOS = 'CREATE_TODOS';

export const fetchHouses = () => {
	return async (dispatch) => {
		// logic to fetch todos from API

		dispatch({
			type: FETCH_TODOS,
			payload: 1
		});
	};
};
