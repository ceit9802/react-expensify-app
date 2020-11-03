import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ((props) => (
  <div>
    <h3><Link to={"/edit/" + props.id}>{props.description}</Link></h3>
    {props.amount} -  {moment(props.createdAt).format('MMMM Do YYYY')} - {props.note}
  </div>
));

