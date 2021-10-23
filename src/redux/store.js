import { combineReducers } from "redux";
import bill from "./reducers/bill";
import billform from "./reducers/billform";
import { createStore } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

const rootReducer = combineReducers({
  bill,
  billform
});

export default function configureStore() {
  return createStore(rootReducer);
}
