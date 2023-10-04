import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState(""); // Инициализируем состояние inputText для хранения текста задачи

  // Функция handleChange вызывается при изменении текста в инпуте
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue); // Обновляем состояние inputText с новым значением текста
  }

  return (
    <div className="form">
      {/* Инпут для ввода текста задачи */}
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          // Вызываем функцию onAdd из родительского компонента, передавая текущий текст задачи
          props.onAdd(inputText);
          // Очищаем состояние inputText после добавления задачи
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
