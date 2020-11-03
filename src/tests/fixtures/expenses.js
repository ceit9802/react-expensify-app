import moment from 'moment'

const expenses = [{
  id: '1',
  description: 'Fruits',
  note: 'Organic',
  amount: 200,
  createdAt: moment(0).valueOf()
},{
  id: '2',
  description: 'Rent',
  note: 'Jan',
  amount: 147000,
  createdAt: moment(0).subtract(4,'days').valueOf()
},{
  id: '3',
  description: 'Credit card',
  note: 'Dec',
  amount: 2540,
  createdAt: moment(0).add(4,'days').valueOf()
}];

export default expenses;
