import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from "./reducer/CartReducer";
import ProductReducer from "./reducer/ProductReducer";

const root = combineReducers({
    ProductReducer,
    CartReducer
});

const store = createStore(root, devToolsEnhancer());

export default store;