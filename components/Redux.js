import React from 'react'
import { View, Text, ActionSheetIOS } from 'react-native'

import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE

//ACTION - INCREMENT

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}



//REDUCER

const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState());
});

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
