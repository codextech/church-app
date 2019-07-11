const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



exports.logIn = async (req, res, next) => {
  let foundUser;
  var token;
  User.findOne({ where: { uniqueName: req.body.uniqueName } })
    .then(user => {
      // check uniqueName exist
      if (!user) {
        return res.status(400).json({
          message: "Name not Found"
        });
      }
      foundUser = user;
      // user password match ,return promis,
      return bcrypt.compareSync(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(400).json({
          message: "Wrong Password"
        });
      }

      if (foundUser) {
      // generatomg Token
        token = generateToken(foundUser);

        res.status(200).json({
          token: token
        });
      }

    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        message: "Log in Failed"
      });
    });
};
