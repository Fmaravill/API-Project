import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Joke = new Schema({
    category: { type: String },
    type: {type: String},
    joke: { type: String },
    delivery: {type: String},
    setup: { type: String }
});

export default mongoose.model("jokes", Joke)
