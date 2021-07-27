// import axios from "axios";

// const PROXY = "https://cors-anywhere.herokuapp.com/";
// const API = "https://carlot-sample.s3-website-us-west-2.amazonaws.com/MOCK_DATA.json";
const data = require("./data.json");

export const fetchCars = () => {
  return new Promise((resolve) => {
    // Return only 100 cars
    resolve(data.slice(0, 100));
  })
}