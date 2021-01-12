import axios from 'axios';

const fetchData = () => {
  return axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
  });
};

export default fetchData;
