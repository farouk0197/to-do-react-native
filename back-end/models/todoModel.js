const mongoose = require("mongoose") 


const todoSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            required: [true, "please enter"]
        }
    }
)


const Item = mongoose.model('item', todoSchema)

module.exports = Item