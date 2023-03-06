import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { cartAdminReducer } from "./cartAdminReducer";
import {drawerReducer} from "./drawerReducer"
const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  cartAdmin: cartAdminReducer,
  drawer: drawerReducer
});

export default rootReducer;
