import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducers.js";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // 使用redux浏览器插件
const store = createStore(combineReducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware())));

export default store;