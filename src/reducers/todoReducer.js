const initState = {
  todoList: [
    {
      content: "todo 1",
      id: 1,
    },
  ],
  selected: null,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let currentState = state.todoList;
      const newState = [...currentState, action.payload];

      return {
        ...state,
        todoList: newState,
      };
    }
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: action.payload,
      };

    case "SELECTED_TODO":
      return {
        ...state,
        selected: action.payload,
      };

    case "EDIT_TODO": {
      let currentState = state.todoList;
      return {
        ...state,
        todoList: currentState,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
