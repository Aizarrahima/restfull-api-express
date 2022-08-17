const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
const bodyParser = require("body-parser");
const BookController = require("./modules/books/books_controller")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req, res) {
    return res.json({
        code: 200,
        message: "Succes running server"
    })
})

app.post('/api/v1/books', BookController.createBooks);
app.get('/api/v1/books', BookController.getBooks);
app.get('/api/v1/books/:id', BookController.getBooksById);
app.put('/api/v1/books/:id', BookController.updateBooks);
app.delete('/api/v1/books/:id', BookController.deleteBooks);

const server = app.listen(port, function () {
    console.log(`Server running on port ${port}`);
})