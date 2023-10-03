import React, { useState } from "react";

function App() {
  // Используем хуки useState для управления состоянием компонента
  const [inputText, setInputText] = useState(""); // Состояние для вводимого текста
  const [items, setItems] = useState([]); // Состояние для списка задач

  // Функция handleChange вызывается при изменении текста в инпуте
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Функция addItem вызывается при нажатии на кнопку "Add"
  function addItem() {
    // Обновляем состояние items, добавляя новую задачу в массив
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    // Очищаем текст в инпуте после добавления задачи
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* Инпут для ввода текста события, связанный с состоянием inputText */}
        <input onChange={handleChange} type="text" value={inputText} />
        {/* Кнопка для добавления задачи, вызывает функцию addItem */}
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* Маппинг элементов массива items в список задач */}
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
