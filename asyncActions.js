const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESSFUL = 'FETCH_USER_SUCCESSFUL';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const initialState = {
    loading: true,
    error: '',
    users: []
}

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccessful = users => {
    return {
        type: FETCH_USER_SUCCESSFUL,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        case FETCH_USER_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
    }
};

const fetchUser = (url) => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get(url)
            .then(response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id);
                dispatch(fetchUserSuccessful(users));
            }).catch(error => {
            dispatch(fetchUserFailure(error.message));
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser("https://jsonplaceholder.typicode.com/users"));
store.dispatch(fetchUser("https://jsonplaceholder.typicode.com/user"));
