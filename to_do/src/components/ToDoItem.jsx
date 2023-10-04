import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id); // Вызывает функцию onChecked, передавая ей id задачи
      }}
    >
      <li>{props.text}</li> 
    </div>
  );
}

export default ToDoItem;
