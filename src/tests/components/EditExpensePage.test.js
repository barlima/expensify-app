import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, onClick, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  onClick = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[0]} 
      history={history} 
      editExpense={onSubmit}
      removeExpense={onClick}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const updates = {
    amount: 10000
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(updates);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id, updates);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onClick).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
});