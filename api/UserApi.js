const { Login, createUser, getAllUsers } = require("../dal/User");

//user create
const RegisterUser = async (data) => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
    userRole: data.userRole,
  };
  return await createUser(user);
};

//get all users

const getAllUsersList = async () => {
  return await getAllUsers();
};

//login

const loginUsers = async (data) => {
  const createUser = {
    email: data.email,
    password: data.password,
  };
  return await Login(createUser);
};

module.exports = { loginUsers, getAllUsersList, RegisterUser };
