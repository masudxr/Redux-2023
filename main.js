// One Reducer for User

// create store
import { createStore } from 'redux';

// constants
const ADD_USER = 'ADD_USER';


// State
const initialState = {
    users: ['Rana'],
    count: 1,
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// reducer: create reducer for counter
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            }
        default:
            state;
    }
}

// store : getState(), dispatch(), subscribe()
const store = createStore(userReducer);

store.subscribe(() => {
    console.log('store', store.getState());
})

store.dispatch(addUser('Masud'));
store.dispatch(addUser('Alfa'));
