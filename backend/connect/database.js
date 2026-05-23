const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Shtuam { family: 4 } si parametër të dytë këtu
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
