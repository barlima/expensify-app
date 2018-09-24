import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up dfault filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY', sortBy: 'date' }
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'testing' }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('testing');
});

test('should set start date', () => {
  const action = { type: 'SET_START_DATE', date: moment(1000) }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(1000));
});

test('should set end date filer', () => {
  const action = { type: 'SET_END_DATE', date: moment(1000) }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(1000));
});
