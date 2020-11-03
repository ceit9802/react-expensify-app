import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('Should setup edit expense object', () => {
  const action = editExpense('123abc', { note: '123' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE', id: "123abc", updates: { note: '123' } });
});

test('Should setup add action object', () => {
  const expense = {
    description: 'Test Expense',
    note: '',
    amount: 13456,
    createdAt: '1'
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id:expect.any(String)
    }
  })
});

test('Should setup add action object with default values', () => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id:expect.any(String)
    }
  })
});
