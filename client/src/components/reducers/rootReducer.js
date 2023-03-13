import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { cartAdminReducer } from "./cartAdminReducer";
import {drawerReducer} from "./drawerReducer"
import { drawerAdminReducer } from "./drawerAdminReducer";
const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  cartAdmin: cartAdminReducer,
  drawer: drawerReducer,
  drawerAdmin: drawerAdminReducer 
});

export default rootReducer;
