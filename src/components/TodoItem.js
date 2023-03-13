import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Single todo item component
const TodoItem = (props) => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const removeTodoItem = (todoId) => {
    let newTodoList = todoList.filter((item) => item.id !== todoId);
    dispatch({ type: "REMOVE_TODO", payload: newTodoList });
  };

  const selectedTodo = (id) => {
    dispatch({ type: "SELECTED_TODO", payload: id });
  };

  return (
    <li className="collection-item" key={props.item.id}>
      <div>{props.item.id}</div>
      {props.item.content}
      <span
        onClick={() => {
          removeTodoItem(props.item.id);
        }}
        className="secondary-content"
      >
        <i className="remove-btn material-icons blue-text">clear</i>
      </span>
    </li>
  );
};

export default TodoItem;
