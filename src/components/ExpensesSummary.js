import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import pluralize from 'pluralize';
import numeral from 'numeral';


export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {pluralize("expense", expenseCount)} totalling <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses =  selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);