const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    app.post(
      '/api/reservation',
      async (req,res) => {
            console.log(req.body)
            const existingUser = await User.findOne({googleId: req.user.googleId})
            if (existingUser) {
                existingUser.date = req.body.date,
                existingUser.location = req.body.location,
                existingUser.vaccine = req.body.vaccine
              await existingUser.save()
            }
            res.send("successful add data to db.")
      }
    );
  
  };