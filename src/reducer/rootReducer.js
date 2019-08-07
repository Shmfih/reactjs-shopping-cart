import { combineReducers } from "redux";
import productReducer from "../reducer/productReducer";
import cartReducer from "../reducer/cartReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
  });
export default rootReducer;