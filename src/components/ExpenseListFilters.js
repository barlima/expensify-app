import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.setTextFilter(e.target.value);
      // console.log(e.target.value)
    }} />
    <select value={props.filters.sortBy} onChange={(e) => {
      if (e.target.value === "date") {
        props.sortByDate();
      } else if (e.target.value === "amount") {
        props.sortByAmount();
      }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTextFilter: value => dispatch(setTextFilter(value)),
    sortByDate: value => dispatch(sortByDate(value)),
    sortByAmount: value => dispatch(sortByAmount(value)),
  };
};


export default connect(mapStateToProps, mapActionsToProps)(ExpenseListFilters);