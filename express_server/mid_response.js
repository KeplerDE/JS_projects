import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

// Использование middleware для разбора данных из формы
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware для генерации названия группы
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  // Генерация названия группы на основе данных из формы
  bandName = req.body["street"] + req.body["pet"];
  next(); // Переход к следующему middleware или маршруту
}

// Использование middleware 'bandNameGenerator'
app.use(bandNameGenerator);

// Маршрут для обработки HTTP GET запросов к корню приложения "/"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Маршрут для обработки HTTP POST запросов к "/submit"
app.post("/submit", (req, res) => {
  // Отправка ответа с сгенерированным названием группы
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Настройка сервера для прослушивания указанного порта
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
