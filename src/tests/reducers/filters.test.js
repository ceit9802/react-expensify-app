import filterReducer from '../../reducers/filters';
import moment from 'moment'


const currentState={
  text:'',
  startDate:undefined,
  endDate:undefined,
  sortBy:'amount'
};
test('should setup default filter values',()=>{
  const state=filterReducer(undefined,{type:'@@INIT'})
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount',()=>{
  const state=filterReducer(undefined,{type:'SET_SORT_BY',sortBy:'amount'})
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
const state=filterReducer(currentState,{type:'SET_SORT_BY',sortBy:'date'})
  expect(state.sortBy).toBe('date');
});


test('should set text filter',()=>{
  const state=filterReducer(currentState,{type:'SET_TEXT',text:'e'})
  expect(state.text).toBe('e');
});

test('should set start date filter',()=>{
  const state=filterReducer(currentState,{type:'SET_START_DATE',startDate:moment(0)})
  expect(state.startDate).toEqual(moment(0));
});


test('should set end date filter',()=>{
  const state=filterReducer(currentState,{type:'SET_END_DATE',endDate:moment(0)})
  expect(state.endDate).toEqual(moment(0));
});