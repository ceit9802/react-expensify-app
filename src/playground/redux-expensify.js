import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'




// Filter reducer




const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  //console.log(state.expenses);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1, createdAt: 200 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Bent', amount: 150, createdAt: 100 }));

// store.dispatch(removeExpense( expenseOne.expense.id ));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

store.dispatch(setTextFilter('ent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByDate());
//store.dispatch(sortByAmount());

store.dispatch(setStartDate(-100));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(10));

const demoState = {
  expenses: [{
    id: '',
    description: 'Jan Rent',
    note: 'Rent for Jan',
    amount: 147000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: '',
    endDate: ''
  }
};

