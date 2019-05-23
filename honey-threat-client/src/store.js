import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import threats from "./reducers/threats_reducer";
import threatFormData from "./reducers/threatFormData";

const reducers = combineReducers({
  threats,
  threatFormData
});
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
