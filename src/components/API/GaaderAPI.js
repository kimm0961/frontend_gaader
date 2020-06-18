import axios from "axios";

const gaaderAPI = {
  baseUrl: "https://gaader-heroku.herokuapp.com/gaader",
};

// GET - alle
export const hentAlleGaader = async () => {
  try {
    let res = await axios.get(gaaderAPI.baseUrl);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// GET - ud fra id
export const hentGaade = async (gaadeData_id) => {
  try {
    let res = await axios.get(gaaderAPI.baseUrl + "/" + gaadeData_id);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// POST - opret en
export const opretGaade = async (gaadeData) => {
  try {
    let res = await axios.post(gaaderAPI.baseUrl + "/admin", gaadeData, {
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// PATCH - ret en
export const retGaade = async (gaadeData_id, gaadeData) => {
  try {
    let res = await axios.patch(
      gaaderAPI.baseUrl + "/admin/" + gaadeData_id,
      gaadeData,
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};

// DELETE - slet en
export const sletGaade = async (gaadeData_id) => {
  try {
    let res = await axios.delete(gaaderAPI.baseUrl + "/admin/" + gaadeData_id, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};
