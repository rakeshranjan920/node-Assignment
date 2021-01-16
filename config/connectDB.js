const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://rakeshranjan920:bim2014004_123@cluster0.42gca.mongodb.net/assignment?retryWrites=true&w=majority'
const connectDB = async () => {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }).then((connect) => console.log('MongoDB connected: ', connect.connection.host));
  };
  
  module.exports = connectDB;