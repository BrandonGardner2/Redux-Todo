const getTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    try {
      todos = JSON.parse(todos);
    } catch (e) {
      todos = [];
    }
  } else {
    todos = [];
  }

  return {
    todos
  };
};

const initial = getTodos();

export default (state = initial, action) => {
  let newTodos = [];
  switch (action.type) {
    case "ADD_TODO":
      newTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    case "MARK_COMPLETE":
      newTodos = state.todos.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    case "REMOVE_COMPLETED":
      newTodos = state.todos.filter(todo => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    case "DELETE_TODO":
      newTodos = state.todos.filter((todo, index) => index !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
};
