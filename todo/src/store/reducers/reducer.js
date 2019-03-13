const initial = {
  todos: [
    {
      task: "Take out trash",
      completed: false
    },
    {
      task: "Feed the dogs",
      completed: false
    },
    {
      task: "Learn to code",
      completed: false
    }
  ]
};

export default (state = initial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    case "REMOVE_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
