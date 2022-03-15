require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const User = mongoose.model('User', { 
    name: String,
    email: String,
    username: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    role: String,
    token: String,
    tokenExpires: Date,

});


exports.User = User;

