import { combineReducers } from "redux";
import LoadingReducer from "../cartReducer"

const rootReducer = combineReducers({
	loading: LoadingReducer
});

export default rootReducer
