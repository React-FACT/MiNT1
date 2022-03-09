import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from './reducer/auth.reducer'

// const reducer = combineReducers({
//   users: authReducer
// })

let initalState = {
  cart: {abc: 'abc'},
};

const middleware = [thunk];
const store = createStore(
  authReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;