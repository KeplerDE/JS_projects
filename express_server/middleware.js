import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Отправка файла "index.html" в качестве ответа на запрос
res.sendFile(__dirname + "/public/index.html");
});

// Маршрут для обработки HTTP POST запросов к "/submit"
app.post("/submit", (req, res) => {
  // Вывод данных, полученных из формы, в консоль
  console.log(req.body);
});

// Настройка сервера для прослушивания указанного порта
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
