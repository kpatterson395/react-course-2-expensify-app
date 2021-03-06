import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'


test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT'})
	expect(state).toEqual([]);
});



test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id:'5'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);

});

test('should add an expense', () => {
	const expense = 	{
		id: '3',
		description: 'Water',
		note:'',
		amount: 1950,
		createdAt: 3500
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);

});


test('should edit an expense' , () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '3',
		updates: {
			note: 'needed water'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[2].note).toBe('needed water');
});

test('should not edit an expense with invalid id' , () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '4',
		updates: {
			note: 'needed water'
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
})



