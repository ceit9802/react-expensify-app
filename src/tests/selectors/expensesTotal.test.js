import moment from 'moment'
import expensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const result = expensesTotal();
  expect(result).toEqual(0)
});

test('should correctly add up single expense', () => {
  const result = expensesTotal([expenses[2]]);
  expect(result).toEqual(expenses[2].amount)
});

test('should correctly add up multiple expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount)
});

