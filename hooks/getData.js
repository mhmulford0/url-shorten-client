import axios from 'axios';

const fetchData = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true,
  });
};

export default fetchData;
