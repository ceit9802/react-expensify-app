const expensesDefaultState = [];
export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      //console.log(action.updates)
      return state.map((expense) => {
        //console.log(expense);
        if (expense.id === action.id) {
          //console.log({ ...expense, ...action.updates });
          return { ...expense, ...action.updates };
        }
        return expense;
      });
      case 'SET_EXPENSES':
        return action.expenses;      
    default:
      return state;
  }
};


