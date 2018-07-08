var mongoose = require('mongoose');
let BookSchema = new mongoose.Schema ({
  title: {
    type : String,
    required : true
  },
  author: {
    type : String,
    required : true
  },
  category: {
    type : String,
    required : true
  }
});

module.exports = mongoose.model('Book', BookSchema);
