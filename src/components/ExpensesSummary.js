import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = `${expensesCount === 1 ? "expense" : "expenses"} `;
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expensesCount}</span> {expenseWord} totaling <span>{numeral(expensesTotal / 100).format("$0,0.00")}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const visibileExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibileExpenses.length,
    expensesTotal: selectExpensesTotal(visibileExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);