const mongoose = require('mongoose')

const URI = 'mongodb+srv://parth_padhiar:JNW9LQS3wHv9TBFD@cluster0.e3pod.mongodb.net/om_sai?retryWrites=true&w=majority';

// connect to mongoose
const connectDB = async()=>{
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser:true});
    console.log('Connected');
}

module.exports = connectDB
