import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ((props) => (
  <div>
    <h3><Link to={"/edit/" + props.id}>{props.description}</Link></h3>
    {numeral(props.amount/100).format("$0,0.00")} -  {moment(props.createdAt).format('MMMM Do, YYYY')} - {props.note}
  </div>
));

