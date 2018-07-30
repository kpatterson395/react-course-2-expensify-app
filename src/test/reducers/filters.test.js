import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('should setup default filter values', () => {
	const state =filtersReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});


test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');

});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = {type: 'SORT_BY_DATE'};
	const state = filtersReducer(currentState, action);	
	expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
	const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'test'});
	expect(state.text).toBe('test');
});
// should set startDate filter
test('should set start date', () => {
	const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment()});
	expect(state.startDate).toEqual(moment());
})
// should set endDate filter

test('should set end date', () => {
	const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)});
	expect(state.endDate).toEqual(moment(0));
})
