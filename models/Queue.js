const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const QueueSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("queue", QueueSchema);