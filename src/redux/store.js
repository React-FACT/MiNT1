import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer, userReducer } from './reducer/auth.reducer'
import { roleReducer } from './reducer/role.reducer'

const reducer = combineReducers({
  users: authReducer,
  user: userReducer,
  roles: roleReducer
})

let initalState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;