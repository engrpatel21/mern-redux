const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

function auth(req, res, next) {
  const token = req.header('x-auth-token')
  
  if (!token) return res.status(401).json('invalid token')
  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch (e) {
    res.status(400).json({msg: 'token is not valid'})
  }

};

module.exports = auth