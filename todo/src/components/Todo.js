import React from "react";
import { connect } from "react-redux";
import { markComplete } from "../store/actions/actions";

const Todo = props => {
  return (
    <div className="todo-container">
      <span>{props.todo}</span>
      <button onClick={() => props.markComplete(props.id)}>Completed</button>
    </div>
  );
};

export default connect(
  null,
  { markComplete }
)(Todo);
