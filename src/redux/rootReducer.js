import {combineReducers} from "redux";
import iceCreamReducer from './iceCream/iceCreamReducer'
import cakeReducer from './cake/cakeReducers'
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer