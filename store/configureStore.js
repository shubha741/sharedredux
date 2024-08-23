// store/configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducers/postReducer';
import commentReducer from '../reducers/commentReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
