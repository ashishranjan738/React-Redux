const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAMS = "BUY_ICE_CREAMS";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    };
}

function buyIceCreams() {
    return {
        type: BUY_ICE_CREAMS,
        info: "First redux action"
    };
}

// (previousState, action) => newState
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, // First create a copy before modifying
                numOfCakes: state.numOfCakes - 1
            }
        case BUY_ICE_CREAMS:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams -1
            }
        default:
            return state
    }
}

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();