const axios = require('axios');
const alert = require('./alert');
// eslint-disable-next-line
const case_ = require('./case');
const observable = require('./observable');

class TheHive4node {
  constructor(url, principal, password = null, options) {
    const axiosOptions = {
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    if (password !== null) {
      axiosOptions.auth = {
        username: principal,
        password,
      };
    } else {
      axiosOptions.headers.Authorization = `Bearer ${principal}`;
    }

    this.axiosInstance = axios.create(axiosOptions);
  }
}

Object.entries(alert.TheHiveMethods).forEach(([key, value]) => {
  TheHive4node.prototype[key] = value;
});

Object.entries(case_.TheHiveMethods).forEach(([key, value]) => {
  TheHive4node.prototype[key] = value;
});

Object.entries(observable.TheHiveMethods).forEach(([key, value]) => {
  TheHive4node.prototype[key] = value;
});

module.exports = { TheHive4node, Alert: alert.Alert };
