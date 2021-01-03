const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:String,
    image: {
      type: String,
      required: true
    }
})

const userDatas = mongoose.model("userData", userSchema);
module.exports = userDatas;