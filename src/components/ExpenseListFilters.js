import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render () {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.setTextFilter(e.target.value);
          // console.log(e.target.value)
        }} />
        <select value={this.props.filters.sortBy} onChange={(e) => {
          if (e.target.value === "date") {
            this.props.sortByDate();
          } else if (e.target.value === "amount") {
            this.props.sortByAmount();
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}


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
    setStartDate: value => dispatch(setStartDate(value)),
    setEndDate: value => dispatch(setEndDate(value))
  };
};


export default connect(mapStateToProps, mapActionsToProps)(ExpenseListFilters);