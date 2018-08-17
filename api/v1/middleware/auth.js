const jwt = require('jsonwebtoken');

module.exports = {
  isAuth: (req,res,next) => {
    try {
      const token = req.headers.token;
      console.log(token)
      var decoded = jwt.verify(token, "COBA");
      req.user = decoded;
      next();
    } catch(err) {
      res.status(401).json({
        message: 'Token is Invalid'
      });
    }
  }
};