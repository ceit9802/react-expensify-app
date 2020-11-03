import moment from 'moment';
import {setStartDate,setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('should generate set stat date action object',()=>{
  const action=setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  })
});

test('should generate set end date action object',()=>{
  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  })
});

test('should generate set sort by date action object',()=>{
  const action=sortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  })
});

test('should generate set sort by amount action object',()=>{
  const action=sortByAmount();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  })
});

test('should generate set text filter action object',()=>{
  const action=setTextFilter('fun');
  expect(action).toEqual({
    type: 'SET_TEXT',
    text:'fun'
  })
});

test('should clear set text filter action object',()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text:''
  });
});