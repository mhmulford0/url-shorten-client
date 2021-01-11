import axios from 'axios';

const fetchData = () => {
  return axios.create({
    baseURL: 'http://lnkshrt.app',
    withCredentials: true,
  });
};

export default fetchData;
