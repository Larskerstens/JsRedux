import * as redux from "redux";
import logger from "redux-logger";
import countReducer from "./counter";
import vriendenReducer from "./klasvrienden";
import persoonReducer from "./person";

const rootReducer = redux.combineReducers({
  countState: countReducer,
  vriendenState: vriendenReducer,
  persoonState: persoonReducer,
});

const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));

export default store;
