import React from "react";
import { List, Checkbox, Button } from "@material-ui/core";
import "../App.css";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div
      style={{ display: "flex", backgroundColor: "rgba(240, 248, 255, 0.7)" }}
    >
      <Checkbox
        check="checked"
        color="primary"
        onChange={handleCheckboxClick}
      />
      <List
        style={{
          color: "midnightblue",
          textDecoration: todo.completed ? "line-through" : null,
          margin: "10px",
        }}
      >
        {todo.task}
      </List>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleRemoveClick}
        style={{ marginLeft: "auto" }}
      >
        <i class="far fa-trash-alt" />
      </Button>
    </div>
  );
};

export default Todo;
