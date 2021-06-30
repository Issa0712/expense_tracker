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

console.log('test')

const state = store.getState()
const visibleExpenses = getvisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)





const jsx = (
    <Provider store={store}>
    <AppRoute />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));