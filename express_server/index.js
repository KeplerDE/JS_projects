import express from 'express';
const app = express();



app.get("/", (req, res) => {
    res.send("<h1>Hey Home</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>Hey About</h1>")
})

app.get("/index", (req, res) => {
    res.send("<h1>Hey Index</h1>")
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
