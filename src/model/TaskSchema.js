
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },

    hr: {
        type: Number,
        required: true,
    },
    
    type: {
        type: String,
        required: true,
        default: "entry",
    },
});

// creating table

export default mongoose.model("Task", taskSchema); /// wiill create a table name tasks


///
