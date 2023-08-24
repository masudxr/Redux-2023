// create store
import { createStore } from 'redux';

// Define Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'
    ;
// State
const initialState = {
    count: 0,
}
const initialUserState = {
    users: [{ name: 'Masud Rana' }],
}


// Action: 2 things => Object-type, payload
//  increment
const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}
// reset
const resetAction = () => {
    return {
        type: RESET,
    }
}
const incrementCounterByValue = () => {
    return {
        type: INCREMENT,
    }
}

//  decrement
const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}

// reducer: create reducer for counter
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            state;
    }
}

// store : getState(), dispatch(), subscribe()
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log('store', store.getState());
})

//  dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());