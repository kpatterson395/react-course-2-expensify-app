import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', () => {

	const action = setStartDate(moment(1));
	expect(action).toEqual({
		type:'SET_START_DATE',
		startDate: moment(1)
	})

});


test('should generate setEndDate action object', () => {

	const action = setEndDate(moment(1));
	expect(action).toEqual({
		type:'SET_END_DATE',
		endDate: moment(1)
	})
	
});

test('should generate setTextFilter action object with provided values', () => {

	const action = setTextFilter('test');
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text: 'test'
	})
	
});

test('should generate setTextFilter action object with no values', () => {

	const action = setTextFilter();
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text: ''
	})
	
});

test('should generate sortByDate action object', () => {

	const action = sortByDate();
	expect(action).toEqual({
		type:'SORT_BY_DATE'
	})
	
});

test('should generate sortByAmount action object', () => {

	const action = sortByAmount();
	expect(action).toEqual({
		type:'SORT_BY_AMOUNT'
	})
	
});