import axios from 'axios';

const fetchData = () => {
  return axios.create({
    baseURL: 'https://lnkshrt.app',
    withCredentials: true,
  });
};

export default fetchData;
