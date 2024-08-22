const User = require("./Connection").db("users").collection("userdetails");

const ObjectID = require("mongodb").objectId;

//create user
const createUser = async ({ name, email, password, userRole }) => {
  const result = await User.insertOne({ name, email, password, userRole });
  return result;
};

//get all users
const getAllUsers = async () => {
  const data = await User.find();
  return data.toArray();
};

//login

const Login = async ({ email, password }) => {
  const user = await User.findOne({ email: email });
  if (user) {
    if (user?.password !== password) {
      return { msg: "login faild" };
    } else {
      return { msg: "login ok", token: user._id, userRole: user.userRole };
    }
  } else {
    return { msg: "login faild" };
  }
};

module.exports = { Login, createUser, getAllUsers };
