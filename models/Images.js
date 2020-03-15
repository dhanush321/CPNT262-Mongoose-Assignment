const mongoose = require('mongoose');

// Step 1: Define our Schema
/*
"Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection."
*/
const imageSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    source: String,
    fileName: String,
    attribution: {
        source: String,
        credit: String,
        url: String
    }
  }
);

// Compile and export our model using the above Schema.

module.exports = mongoose.model('Image', imageSchema);
