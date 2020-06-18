import axios from "axios";

const AuthAPI = {
  baseUrl: "https://gaader-heroku.herokuapp.com/auth"
};

// login
export const BrugerLogin = async brugerInfo => {
  try {
    let res = await axios.post(AuthAPI.baseUrl + "/login", brugerInfo, { withCredentials: true });
    // console.log(brugerInfo);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// logout
export const BrugerLogout = async () => {
  try {
    let res = await axios.get(AuthAPI.baseUrl + "/logout", { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// loggedin
export const BrugerLoggedin = async () => {
  try {
    let res = await axios.get(AuthAPI.baseUrl + "/loggedin", { withCredentials: true });
    // console.log(res.data)
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};
