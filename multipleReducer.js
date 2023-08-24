// Create Multiple Reducer
// 1. productReducer
// 2. cartReducer
// create store
import { createStore } from 'redux';
// products Constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// product state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
}

// product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

// product Reducer
// reducer: create reducer for counter
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        default:
            state;
    }
}

// store : getState(), dispatch(), subscribe()
const store = createStore(productReducer);

store.subscribe(() => {
    console.log('store', store.getState());
})

// store.dispatch(addProducts(''));
store.dispatch(getProducts(''));