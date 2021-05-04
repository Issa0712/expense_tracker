
import {createStore} from 'redux';

//ACTION GENERATORS ARE FUNCTIONS TAT RETURN ACTION OBJECTS

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementBy = ({decrementBy = 1} = {}) => {
    return{
        type: 'DECREMENT',
        decrementBy
    }
}

const reset = ({reset = 0} = {}) => {
    return{
        type: 'RESET',
        count: reset

    }
}

const setCount = ({count}) => {
    return{
        type: 'SET',
        count: count

    }
}


//STORE 

//REDUCERS NEVER CHANGE THE STATE OR ACTION JUST RETURN A NEW OBJECT AND REDUCERS ARE PURE FUNCTIONS DONT RELY ON INPUTS OUTSIDE ITS SCOPE

const storeReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            
            
        return{
            count: state.count + action.incrementBy
        };
    
        case 'DECREMENT':
            
            return{
                count:state.count - action.decrementBy
            };
            case 'SET':
                return{
                    count: action.count
                }
    
            case 'RESET':
                return{
                    count: 0
                }
    
        default:
            return state;
    }
    
    }
const store = createStore(storeReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())

})

store.dispatch(incrementCount({incrementBy: 5}))


store.dispatch(incrementCount())

store.dispatch(decrementBy({decrementBy: 2}))



store.dispatch(setCount({count: 100}))






// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })



// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })
// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })


