import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
// import cartReducer from "./reducer/cartReducer";
import rootReducer from './reducer/rootReducer';

// const middleware = applyMiddleware(thunkMiddleWare);
const store = createStore(rootReducer, {});

export default store;