import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.setTextFilter(e.target.value);
      // console.log(e.target.value)
    }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTextFilter: value => dispatch(setTextFilter(value))
  };
};


export default connect(mapStateToProps, mapActionsToProps)(ExpenseListFilters);