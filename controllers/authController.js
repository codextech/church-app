const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const adminHelper = require("../helpers/adminHelper");
const genericHelper = require("../helpers/genericHelper");


exports.logIn = async (req, res, next) => {
  var model = req.body;
  let foundUser;
  var token;

  try {

  const user = await adminHelper.findUserByName(model.name);

  if (!user) {
  genericHelper.jsonResponse(res,400,"Name not Found",null);
  }

  foundUser = user;
  // user password match ,return promis,
  var isMatched = bcrypt.compareSync(model.password, user.password);

if (!isMatched) {
  genericHelper.jsonResponse(res,400,"Wrong Password",null);
  }

  if (foundUser) {
    // generating Token
   const  token = generateToken(foundUser);

  genericHelper.jsonResponse(res,200,"log in",token);
    }

  } catch (error) {
  genericHelper.jsonResponse(res,500,"Log in Failed",error);
  }
}






function generateToken(foundUser) {
  const token = jwt.sign(
    {
      name: foundUser.name,
      userId: foundUser.userId,
      isAdmin: foundUser.isAdmin,
      groupId : foundUser.eventGroupId
    },
    "%alongSecretKey&52HJH",
    { expiresIn: "48h" }
  );
  return token;
}
