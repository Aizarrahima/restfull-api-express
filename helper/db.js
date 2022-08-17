const mongoose = require("mongoose")
const stringConnection = "mongodb://127.0.0.1:27017/restfull"

mongoose.connect(stringConnection);
mongoose.Promise = global.Promise;

module.exports = {
    Books: require('../modules/books/books_model')
}