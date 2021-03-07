import * as redux from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import countReducer from "./counter";
import vriendenReducer from "./klasvrienden";
import persoonReducer from "./person";
import movieReducer from "./movie";

const rootReducer = redux.combineReducers({
  countState: countReducer,
  vriendenState: vriendenReducer,
  persoonState: persoonReducer,
  movieState: movieReducer,
});

const store = redux.createStore(
  rootReducer,
  redux.applyMiddleware(logger, thunk)
);

export default store;
