import { Schema } from "mongoose";

export default {
  name: "Sample",
  schema: new Schema({
    // Add mongo fields here
    name: String,
    age: Number,
  }),
};
