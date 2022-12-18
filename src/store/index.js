import { legacy_createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = legacy_createStore(reducer, enhancer);

export default store;
