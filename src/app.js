import React, { Component } from 'react' 
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
const { expenses, filters } = store.getState()

store.dispatch(addExpense({ description: 'Water Bill', amount: 1000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3000 }))
store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'))