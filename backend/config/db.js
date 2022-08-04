const mongoose = require ('mongoose');

// Connect DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect (process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log (`DB is established ON host: ${conn.connection.host}`);
  } catch (error) {
    console.log (`DB connection error: ${error}`);
  }
};

// Exports
module.exports = {connectDB};
