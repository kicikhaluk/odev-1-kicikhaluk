"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const API_URL = "https://jsonplaceholder.typicode.com";

 const getData = async (userId) => {
  try {
    const { data: user } = await _axios2.default.get(API_URL + `/users/${userId}`);
    const { data: posts } = await _axios2.default.get(API_URL + `/posts?userId=${userId}`);
    const data = {
      ...user,
      posts
    };
    return data;
  } catch (err) {
    console.log(err);
  }
}; exports.getData = getData;