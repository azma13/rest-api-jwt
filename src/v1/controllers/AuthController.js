const models = require('../db/models');
const User = models.users
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: (req, res) => {
    console.log(req.body)
  User.create({
    name: req.body.name,
    password: req.body.password
  }).then((user) => {
    res.status(201).json({
      message: `Success Sign Up New User`,
      user
    });
  }).catch((err) => {
    console.log(req.body)
    res.status(500).json({
      message: err.message
    });
  });
  },
  signIn: (req,res) => {
    User.findOne({
      where: {
        name: req.body.name
      }
    }).then((user) => {
      const checkLogin = bcrypt.compareSync(req.body.password,user.password);
      if (checkLogin) {
        var token = jwt.sign({ id: user.id, name: user.name }, "COBA");
        console.log(token)
        if (token) {
          res.status(200).json({
            message: "Success Sign In",
            token: token
          });
        }
      } else {
        res.status(200).json({
          message: "Failed Sign In",
        });
      }
    }).catch((err) => {
      res.status(200).json({
        message: err.message,
      });
    });
  },
};
