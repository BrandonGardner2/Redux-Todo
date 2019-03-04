import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/actions";

const TodoForm = props => {
  const [task, updateTask] = useState("");

  const sendTodo = e => {
    e.preventDefault();
    const payload = {
      task,
      completed: false
    };
    props.addTodo(payload);
    updateTask("");
  };

  return (
    <form onSubmit={sendTodo} className="todo-form">
      <input
        onChange={e => updateTask(e.target.value)}
        placeholder="What to do?"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default connect(
  null,
  { addTodo }
)(TodoForm);
