// Get visible expenses
export default (expenses=[]) => {
  //console.log(`expenses=${expenses}`);
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
};
