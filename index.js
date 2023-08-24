// create store
import { createStore } from 'redux';

// Define Constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
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
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
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
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
store.dispatch(incrementCounterByValue(5));
// store.dispatch(resetAction());