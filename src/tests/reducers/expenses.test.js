import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state',()=>{
  const state = expensesReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
  const state = expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:expenses[1].id});
  expect(state).toEqual([expenses[0],expenses[2]]);
});


test('should not remove expense if id not found',()=>{
  const state = expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:-1});
  expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
});

test('should add an expense',()=>{
  const newExpense={
    id:4,
    description:'Newly added expense',
    note:'',
    createdAt:0
  };
  const state = expensesReducer(expenses,{type:'ADD_EXPENSE',expense:newExpense});
  expect(state).toEqual([expenses[0],expenses[1],expenses[2],newExpense]);
});


test('should edit expense by id',()=>{
  const updates ={note:'updated note', amount:568434};
  const state = expensesReducer(expenses,{type:'EDIT_EXPENSE',id:expenses[1].id,updates});
  expect(state).toEqual([expenses[0],{...expenses[1],...updates},expenses[2]]);
});


test('should not edit expense if id not found',()=>{
  const updates ={note:'updated note', amount:568434};
  const state = expensesReducer(expenses,{type:'EDIT_EXPENSE',id:-1, updates});
  expect(state).toEqual(expenses);
});

test('should set expenses',()=>{
  const state = expensesReducer(
    [{id:1,note:"This is the current state that will be wiped off"}],{type:'SET_EXPENSES',expenses:expenses[1]});
  expect(state).toEqual(expenses[1]);
});