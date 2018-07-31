import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../../selectors/expenses-total.js'
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
	const res = selectExpensesTotal([]);
	expect(res).toBe(0);
});

test('should return sum of single expense array', () => {
	const res = selectExpensesTotal([expenses[0]]);
	expect(res).toBe(195);
});

test('should return sum of expense array', () => {
	const res = selectExpensesTotal(expenses);
	expect(res).toBe(5790);
})

