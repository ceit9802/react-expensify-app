import React from 'react';
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
  wrapper.setProps({filters:altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle filter text change', () => {
  wrapper.find('input').simulate('change', { target: { value: 'NewFilterText' } });
  expect(setTextFilter).toHaveBeenCalledWith('NewFilterText');  
});

test('should sort by date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByDate).toHaveBeenCalled();  
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalled();  
});

test('should handle date changes', () => {
  const newStartDate= moment();
  const newEndDate=moment().add(-3,'days')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:newStartDate,endDate:newEndDate});
  expect(setStartDate).toHaveBeenCalledWith(newStartDate);  
  expect(setEndDate).toHaveBeenCalledWith(newEndDate);  
});

test('should handle date focus change', () => {
  const calendarFocused='endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
