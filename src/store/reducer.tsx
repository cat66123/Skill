import { combineReducers } from "redux-immutable";
import loginReducer from "../pages/login/store/reducer";
import homeReducer from "../pages/home/store/reducer";

const reducer = combineReducers({
  login: loginReducer,
  home: homeReducer
});

export default reducer;
