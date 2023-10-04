import React, { useState } from "react";
import ToDoItem from "./ToDoItem"; // Импортируем компонент для отображения задач
import InputArea from "./InputArea"; // Импортируем компонент для ввода задач

function App() {
  const [items, setItems] = useState([]); // Инициализируем состояние items как пустой массив для хранения задач

  // Функция addItem вызывается при добавлении новой задачи из InputArea компонента
  function addItem(inputText) {
    // Обновляем состояние items, добавляя новую задачу в конец массива
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  // Функция deleteItem вызывается при удалении задачи из ToDoItem компонента
  function deleteItem(id) {
    // Обновляем состояние items, фильтруя задачи по индексу, чтобы удалить задачу с указанным id
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* Отображаем InputArea компонент для ввода новых задач */}
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {/* Маппим задачи из массива items и отображаем каждую с использованием ToDoItem компонента */}
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem} // Передаем функцию удаления в ToDoItem
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
