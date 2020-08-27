import React from 'react';
import {connect} from "react-redux";
import {removeFeature} from "../action/car";
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{
        props.removeFeature(props.feature)
      }} className="button">Remove</button>
      {props.feature.name}
    </li>
  );
};
export default connect(null,{removeFeature})(AddedFeature);