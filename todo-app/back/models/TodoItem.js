const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
  {
    name: String,
    fav: { type: Boolean, default: false },
    done: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Model = mongoose.model("TodoItem", schemaName);
module.exports = Model;
