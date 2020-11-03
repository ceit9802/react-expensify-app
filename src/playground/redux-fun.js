import { createStore } from 'redux'

console.log('Here is to a new start')

const incrementCount = (({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
}));

const decrementCount = (({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
}));

const setCount = (({ setTo = 0 } = {}) => ({
    type: 'SET',
    setTo
}));

const resetCount = (({ resetTo = 0 } = {}) => ({
    type: 'RESET',
    resetTo
}));

const reducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            };
        case 'RESET':
            return {
                count: action.resetTo
            };
        default:
            return state;

    }
});

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(setCount({ setTo: 50 }))
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
//store.dispatch(incrementCount({ incrementBy: 'A' }));
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());

unsubscribe();