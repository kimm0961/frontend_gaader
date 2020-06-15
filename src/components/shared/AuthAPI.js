import axios from "axios";

const AuthAPI = {
  baseUrl: "https://gaader-heroku.herokuapp.com/auth",
  apiKey: ""
};

// login
export const BrugerLogin = async brugerInfo => {
  try {
    let res = await axios.post(AuthAPI.baseUrl + "/login", brugerInfo);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// export const opretGaade = async gaadeData => {
//   try {
//     let res = await axios.post(AuthAPI.baseUrl + "/admin", gaadeData);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };

// // GET - alle gåder
// export const hentAlleGaader = async () => {
//   try {
//     let res = await axios.get(AuthAPI.baseUrl);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };

// // GET - ud fra id
// export const hentGaade = async cartoonData_id => {
//   try {
//     let res = await axios.get(AuthAPI.baseUrl + "/" + cartoonData_id);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };


// // POST - opret en

// export const opretGaade = async gaadeData => {
//   try {
//     let res = await axios.post(AuthAPI.baseUrl + "/admin", gaadeData);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };

// // PATCH - ret en

// export const retGaade = async (gaadeData_id, gaadeData) => {
//   try {
//     let res = await axios.patch(AuthAPI.baseUrl + "/admin/" + gaadeData_id, gaadeData);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };

// // DELETE - slet en 
// export const sletGaade = async gaadeData_id => {
//   try {
//     let res = await axios.delete(AuthAPI.baseUrl + "/admin/" + gaadeData_id);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };
