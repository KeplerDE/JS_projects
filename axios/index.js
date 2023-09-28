import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    // Отправляем GET-запрос к внешнему API для получения случайной активности
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    
    // Извлекаем данные из ответа
    const result = response.data;
    

    console.log(result);
    
    // Рендерим веб-страницу (используя шаблон "index.ejs") с полученными данными
    res.render("index.ejs", { data: result });
  } catch (error) {
    // Обрабатываем ошибки, которые могли возникнуть во время запроса
    console.error("Не удалось выполнить запрос:", error.message);
    
    // Рендерим веб-страницу с сообщением об ошибке, если запрос завершился неудачно
    res.render("index.ejs", {
      error: error.message,
    });
  }
});



app.post("/", async (req, res) => {
  try {
    // Выводим данные, полученные из формы POST-запроса
    console.log(req.body);

    // Извлекаем тип активности и количество участников из запроса
    const type = req.body.type;
    const participants = req.body.participants;

    // Отправляем GET-запрос к внешнему API с учетом выбранных параметров
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );

    // Извлекаем результаты из ответа
    const result = response.data;

    
    console.log(result);

    // Рендерим веб-страницу (шаблон "index.ejs") с случайной активностью из результатов
    res.render("index.ejs", {
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    // Обрабатываем ошибки, которые могли возникнуть во время запроса
    console.error("Не удалось выполнить запрос:", error.message);

    // Рендерим веб-страницу с сообщением об ошибке, если запрос завершился неудачно
    res.render("index.ejs", {
      error: "Нет активностей, соответствующих вашим критериям.",
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
