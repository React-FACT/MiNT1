import logger from "redux-logger";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer, userReducer } from "./reducer/auth.reducer";
import { roleReducer } from "./reducer/role.reducer";
import createSagaMiddleware from "redux-saga";
import { watchGetUsers } from "./sagas";

const reducer = combineReducers({
  users: authReducer,
  user: userReducer,
  roles: roleReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(watchGetUsers);

export default store;
