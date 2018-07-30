import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisible from './selectors/expenses.js';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();


store.dispatch(addExpense({description: 'water bill', amount: 200, createdAt: 4500}));
store.dispatch(addExpense({description: 'gas bill', amount: 4500, createdAt:1000}));
store.dispatch(addExpense({description: 'rent', amount: 19500}));


const state = store.getState();
const visibleExpenses = getVisible(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));