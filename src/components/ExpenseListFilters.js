import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
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
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input className="text-input" type="text" value={this.props.filters.text} placeholder="Search Expenses" onChange={(e) => {
              this.props.setTextFilter(e.target.value);
            }} />
          </div>
          <div className="input-group__item">
            <select className="select" value={this.props.filters.sortBy} onChange={(e) => {
              if (e.target.value === "date") {
                this.props.sortByDate();
              } else if (e.target.value === "amount") {
                this.props.sortByAmount();
              }
            }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
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
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapActionsToProps = (dispatch) => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: value => dispatch(setStartDate(value)),
  setEndDate: value => dispatch(setEndDate(value))
});


export default connect(mapStateToProps, mapActionsToProps)(ExpenseListFilters);