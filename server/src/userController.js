const mongoose = require('mongoose');
const User = mongoose.model('users');
const query = User.findOne({ 'googleId': 'Ghost' });


export default showUser