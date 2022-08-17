const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    bookTitle: { type: String },
    bookAuthor: { type: String },
    bookPages: { type: Number },
    releaseDate: { type: String },
})

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Books', schema);