import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import {
  startAddExpense, addExpense, editExpense, removeExpense,
  setExpenses, startSetExpenses, startRemoveExpense, startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const uid = 'ThisIsATestUID'
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database().ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should setup remove action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('Should setup edit expense object', () => {
  const action = editExpense('123abc', { note: '123' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE', id: "123abc", updates: { note: '123' } });
});

test('Should setup add action object with provided values', () => {

  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({ auth: { uid } });
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is a better mouse',
    createdAt: 2000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database().ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({ auth: { uid } });
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    //console.log(actions);
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });
    return database().ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefault);
    done();
  });
});

test('Should setup add action object with default values', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});
test('Should fetch the expenses from firebase', () => {
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startSetExpenses()).then((done) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});


test('Should remove expense from firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database().ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('Should edit expense in firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[2].id;
  const updates = { note: "A fresh change" }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database().ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().note).toEqual(updates.note);
    done();
  });
});
