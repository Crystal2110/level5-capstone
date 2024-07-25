const mongoose = require('mongoose')
const Schema = mongoose.Schema

const disneySchema = new Schema({
    name: {
        type: String,
    },
    movie: {
        type: String,
    },
    song: {
        type: String,
    },
    story: {
        type: String,
    },
    imageUrl: {
        type: String,
    }

})

module.exports = mongoose.model("Disney", disneySchema)