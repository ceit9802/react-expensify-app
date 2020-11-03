import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter,sortByDate} from './actions/filters';
import moment from 'moment';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store =configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 10000, createdAt: moment() }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 15000, createdAt:  moment().add(3,'days') }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 200000, createdAt:  moment().add(20,'days'), note:'test note' }));

// setTimeout(()=>{store.dispatch(editExpense(expenseOne.id,{note:"Test note added"}));},3000)
const jsx =(
  <Provider store={store}>
  <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
