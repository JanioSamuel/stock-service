const axios = require('axios');

const api = axios.create({
  baseURL: 'https://stooq.com'
});

module.exports = api;