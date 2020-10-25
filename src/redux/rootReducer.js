import {combineReducers} from "redux";
import iceCreamReducer from './iceCream/iceCreamReducer'
import cakeReducer from './cake/cakeReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer