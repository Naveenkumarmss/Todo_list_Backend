import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
});

const todo = mongoose.model("todo", userSchema);

export default todo;
