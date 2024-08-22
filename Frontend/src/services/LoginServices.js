import axios from "axios";

const LoginURL = "http://localhost:3003/user/login";
const RegisterURL = "http://localhost:3003/user/register";

export async function loginFunction(data) {
  let alldata = {
    email: data.email,
    password: data.password,
  };

  return await axios.post(LoginURL, alldata);
}

export async function RegisterUsers(data) {
  var alldata = {
    name: data?.name,
    email: data?.email,
    password: data?.password,
    userRole: data?.userRole,
  };

  return await axios.post(RegisterURL, alldata);
}
