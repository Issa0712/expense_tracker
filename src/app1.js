import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRoute from './routers/appRoute'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import getvisibleExpenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description: 'water bill', amount: 33, createdAt: 2000}))
store.dispatch(addExpense({description: 'gas bill', amount: 22, createdAt: 1000}))
store.dispatch(addExpense({description: 'rent', amount: 575, createdAt: 0}))
store.dispatch(setTextFilter(''))

const state = store.getState()
const visibleExpenses = getvisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)





const jsx = (
    <Provider store={store}>
    <AppRoute />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));