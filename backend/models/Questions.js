const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    id: Number,
    question: String,
    option: String,
    answer: String,
    clownMsg: String
})

const Question = mongoose.model("Question",questionSchema);

module.exports = Question;