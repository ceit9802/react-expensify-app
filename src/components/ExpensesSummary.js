import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const message = `Viewing ${expensesCount} ${expensesCount === 1 ? "expense" : "expenses"} totaling ${numeral(expensesTotal/ 100).format("$0,0.00")}.`;

  return (
    <div>
      <h1> {message}</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  const     visibileExpenses= selectExpenses(state.expenses, state.filters);
  return {
    expensesCount:visibileExpenses.length,
    expensesTotal:selectExpensesTotal(visibileExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);