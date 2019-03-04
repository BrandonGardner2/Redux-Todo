import React from "react";
import { connect } from "react-redux";
import { markComplete, deleteTodo } from "../store/actions/actions";

const Todo = props => {
  return (
    <div className="todo-container">
      <span>{props.todo}</span>
      <button onClick={() => props.markComplete(props.id)}>Completed</button>
      <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { markComplete, deleteTodo }
)(Todo);
