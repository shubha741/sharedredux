import logger from 'redux-logger';
import rootReducer from './reducers'; 
import { thunk } from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import commentReducer from '../reducers/commentReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
