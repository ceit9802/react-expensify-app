import moment from 'moment';
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate } = {}) => {
  //console.log(`expenses=${expenses}`);
  return expenses.filter((expense) => {

    const startDateMatch = !startDate ? true : startDate.isSameOrBefore(moment(expense.createdAt));
    const endDateMatch = !endDate ? true : endDate.isAfter(moment(expense.createdAt));
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
