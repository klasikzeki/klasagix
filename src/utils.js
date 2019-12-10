const find = ({ range = 'all', sort = [], query = {} } = {}) => {
  return {
    params: {
      range,
      sort,
    },
    data: {
      query,
    },
  };
};

module.exports = {
  find,
};
