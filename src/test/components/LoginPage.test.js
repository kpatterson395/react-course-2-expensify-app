import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseLoginPage } from '../../components/ExpenseLoginPage';

test('should correctly render ExpenseLoginPage', () => {
	const wrapper = shallow(<ExpenseLoginPage/>);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<ExpenseLoginPage startLogin={startLogin} />);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});