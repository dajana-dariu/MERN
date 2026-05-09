const { text } = require('express');
const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      remquired: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Task', taskSchema);
