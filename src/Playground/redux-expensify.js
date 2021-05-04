import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD_EXPENSES
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
 
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


//SET_TEXT_FILTER

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    

})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    

})
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



//expenses reducer

const expenseReducer = (state = [], action) => {
    switch (action.type) {
           case 'ADD_EXPENSE':

           return [...state, action.expense] ;

           case 'REMOVE_EXPENSE':


           return state.filter(({id}) => {
                return id !== action.id

           });

           case 'EDIT_EXPENSE':
               return state.map((expense) => {
                   if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                   }
                   else return expense
               })

         

    
        default: return state;
    }
}

//FILTER REDUCER

const initialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
             }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }    
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }        
        default: return state
    }
}

//GET VISIBLE EXPENSES

const getvisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())


        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
           return a.createdAt < b.createdAt ? 1 : -1
        }

        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

//STORE CREATION 
const store = createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters: filtersReducer
        }
    ))

    store.subscribe(() => {
        const state = store.getState()
        const visibleExpenses = getvisibleExpenses(state.expenses, state.filters)
        console.log(visibleExpenses)

    })

    const expenseOne = store.dispatch(addExpense({description: 'rent', amount: '575', createdAt: 1000}))
    const expenseTwo = store.dispatch(addExpense({description: 'gym', amount: '576', createdAt: -1000}))

    // store.dispatch(removeExpense({id: expenseOne.expense.id}))
    // store.dispatch(editExpense(expenseTwo.expense.id, {amount:25}))

    // store.dispatch(setTextFilter('RENT'))
    // store.dispatch(setTextFilter(''))

    store.dispatch(sortByAmount())
    // store.dispatch(sortByDate())

    // console.log(expenseOne)

    // store.dispatch(setStartDate(125))
    // store.dispatch(setStartDate())
    // store.dispatch(setEndDate(1250))


const demoStore = {
    expenses: [{
        id: '2828',
        description: 'rent for Jan',
        note: 'first rent of the calender year',
        amount: 575,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  //date or amount
        startDate: undefined,
        endDate: undefined 

    }
}
