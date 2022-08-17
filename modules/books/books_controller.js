const db = require('../../helper/db');
const Books = db.Books;

async function createBooks(req, res) {
    try {
        let model = {
            "bookTitle": req.body.bookTitle,
            "bookAuthor": req.body.bookAuthor,
            "bookPages": req.body.bookPages,
            "releaseDate": req.body.releaseDate
        }

        const books = new Books(model)
        let query = await books.save();

        return res.json({
            code: 201,
            message: "Success Created Book",
            data: query
        });
    } catch (error) {
        return res.json({ message: error })
    }
}

async function getBooks(req, res) {
    try {
        let query = await Books.find();

        return res.json({
            code: 200,
            message: "Success Getting All Books",
            data: query
        })
    } catch (error) {
        return res.json({ message: error })
    }
}

async function getBooksById(req, res) {
    try {
        let id = req.params.id;
        let query = await Books.find({ _id: id })

        return res.json({
            code: 200,
            message: "Success Getting Book by Id",
            data: query
        })
    } catch (error) {
        return res.json({ message: error })
    }
}

async function updateBooks(req, res) {
    try {
        let id = req.params.id
        let query = await Books.update({ _id: id }, req.body);

        return res.json({
            code: 200,
            message: "Success Updated Book",
            data: query
        })
    } catch (error) {
        return res.json({ message: error })
    }
}

async function deleteBooks(req, res) {
    try {
        let id = req.params.id
        let query = await Books.findByIdAndRemove({ _id: id })

        return res.json({
            code: 200,
            message: "Success Deleted Book",
            data: query
        })
    } catch (error) {
        return res.json({ message: error })
    }
}

module.exports = {
    createBooks,
    getBooks,
    getBooksById,
    updateBooks,
    deleteBooks
}