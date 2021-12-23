import axios from 'axios';

const httpClient = () => {
  const baseURL = 'https://ecommercee-api.herokuapp.com/api/v1';

  const instance = axios.create({
    baseURL,
  });

  return instance;
};
export default httpClient;
