const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,location: String, email: String, password: String, role: String
});
module.exports = mongoose.model('User', userSchema);