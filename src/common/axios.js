import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export const get = (endpoint, params = {}, headers = {}) => {
  // console.log("Making GET request to:", endpoint);
  // console.log("With params:", params);
  // console.log("With headers:", headers);
  return axios
    .get(endpoint, { params }, { headers })
    .then((response) => response.data)
    .catch((error) => error);
};

export const post = (endpoint, data, headers = {}) => {
  return axios
    .post(endpoint, data, { headers })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const put = (endpoint, data, headers = {}) => {
  return axios
    .put(endpoint, data, { headers })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const remove = (endpoint, headers = {}) => {
  return axios
    .delete(endpoint, { headers })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
