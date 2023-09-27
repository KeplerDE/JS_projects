import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Использование middleware Morgan с предустановленным форматом "combined"

/*
Morgan будет логировать информацию о каждом входящем HTTP запросе, включая метод запроса, URL, статус ответа и другие детали.
*/


app.use(morgan("combined"));

// Маршрут для обработки HTTP GET запросов к корню приложения "/"
app.get("/", (req, res) => {
  // Отправка "Hello" в качестве ответа на запрос
  res.send("Hello");
});

// Настройка сервера для прослушивания указанного порта
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
