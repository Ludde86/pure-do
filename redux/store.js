import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
	todo: todoReducer
});

// middleware -> for handeling asynchronous operations
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);
