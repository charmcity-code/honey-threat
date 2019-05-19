import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import threats from "./reducers/threats_reducer";

const reducers = combineReducers({
  threats
});
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
