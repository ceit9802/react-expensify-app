import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { auth } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p> Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
    history.push('/');
  }
});

