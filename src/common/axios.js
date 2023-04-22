
import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL;

export const get = (endpoint, params = {}) => {
  return axios.get(endpoint, { params })
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const post = (endpoint, data) => {
  return axios.post(endpoint, data)
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const put = (endpoint, data) => {
  return axios.put(endpoint, data)
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const remove = (endpoint) => {
  return axios.delete(endpoint)
    .then(response => response.data)
    .catch(error => console.log(error));
};
