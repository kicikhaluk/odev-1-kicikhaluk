import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com";

export const getData = async (userId) => {
  try {
    const { data: user } = await axios.get(API_URL + `/users/${userId}`);
    const { data: posts } = await axios.get(API_URL + `/posts?userId=${userId}`);
    const data = {
      ...user,
      posts
    };
    return data;
  } catch (err) {
    console.log(err);
  }
};