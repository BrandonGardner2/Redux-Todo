import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const Todos = props => {
  return (
    <div className="todos-container">
      {props.todos.map((todo, index) => {
        return <Todo key={index} todo={todo.task} id={index} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(Todos);
