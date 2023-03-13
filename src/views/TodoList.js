import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoList = todos.todoList;

  const [inputTodo, setInputTodo] = useState("");
  const [errMsg] = useState("");

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  const saveToDo = () => {
    let newTodoObject = {
      id: todoList.length,
      content: inputTodo,
    };

    const action = { type: "ADD_TODO", payload: newTodoObject };
    dispatch(action);
    setInputTodo("");
  };

  return (
    <section id="section-todo">
      <h3 className="center-align white-text blue">Todo List</h3>
      {todoList.length > 0 ? (
        <ul className="collection">
          {todoList.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </ul>
      ) : (
        <p className="center-align">You don't have anything to do! Awesome!</p>
      )}

      <div className="row">
        <p className="red-text err-msg col s12 center-align">{errMsg}</p>
        <div className="input-field col s10">
          <input
            onChange={handleInput}
            value={inputTodo}
            placeholder="Add todo..."
            id="todo-input"
            type="text"
          />
          <label htmlFor="todo-input" className="active">
            New Todo
          </label>
        </div>

        <button className="btn col s2 blue" onClick={saveToDo}>
          Save
        </button>
      </div>
    </section>
  );
};

export default TodoList;
