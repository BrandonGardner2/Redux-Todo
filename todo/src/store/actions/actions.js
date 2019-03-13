export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const markComplete = id => {
  return {
    type: "MARK_COMPLETE",
    payload: id
  };
};

export const removeCompleted = () => {
  return {
    type: "REMOVE_COMPLETED"
  };
};
