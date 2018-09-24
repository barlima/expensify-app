import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
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

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    description: 'shoes',
    amount: 10000,
    note: '',
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, newExpense]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note: 'Modified content'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe('Modified content');
});

test('should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'Modified content'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});