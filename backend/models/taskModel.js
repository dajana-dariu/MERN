const { text } = require('express');
const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      remquired: [true, 'Please add a text value'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      remquired: true,
      ref: 'User',
    },
  },

  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Task', taskSchema);
