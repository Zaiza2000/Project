import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { cartAdminReducer } from "./cartAdminReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  cartAdmin: cartAdminReducer
});

export default rootReducer;
