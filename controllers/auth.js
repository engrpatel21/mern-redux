const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bycrypt = require('bcryptjs');



module.exports = {
  auth,
  getUser
}

function getUser(req, res) {
  User.findById(req.user.id)
    .select('-password')
    .then(user => {
      res.json(user)
    })
}

function auth(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({msg: 'please enter al fields'})
  }

  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'invalid credentials' })
      
      bycrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'invalid credentials' })
          jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email
                }
              })
            }
          )
        })



  })

}



/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}