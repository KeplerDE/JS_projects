import React from "react";  
import Header from "./Header";  
import Footer from "./Footer";  
import Note from "./Note";  
import notes from "../notes";  

function App() {  // Объявляем функциональный компонент App
  return (
    <div>
      <Header />                 
      {notes.map(noteItem => (  // Используем метод map для отображения каждого элемента массива notes
        <Note
          key={noteItem.key}  // Устанавливаем уникальный ключ для компонента Note
          title={noteItem.title}  // Передаем пропс title в компонент Note
          content={noteItem.content}  // Передаем пропс content в компонент Note
        />
      ))}
      <Footer />  // Рендерим компонент Footer
    </div>
  );
}

export default App;  // Экспортируем компонент App
