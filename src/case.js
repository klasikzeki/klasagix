const { find } = require('./utils');

const listCases = async function listCases() {
  const casesRes = await this.axiosInstance.get('/api/case');
  return casesRes.data;
};

const findCases = async function findCases(attributes) {
  const { params, data } = find(attributes);
  const casesRes = await this.axiosInstance.post('/api/case/_search', data, {
    params,
  });
  return casesRes.data;
};

const getCase = async function getCase(id) {
  const caseRes = await this.axiosInstance.get(`/api/case/${id}`);
  return caseRes.data;
};

const deleteCase = async function deleteCase(id) {
  const caseRes = await this.axiosInstance.delete(`/api/case/${id}`);
  return caseRes.data;
};

const getLinkedCases = async function getLinkedCases(id) {
  const caseRes = await this.axiosInstance.get(`/api/case/${id}/links`);
  return caseRes.data;
};

const updateCase = async function updateCase(id, case_) {
  const caseRes = await this.axiosInstance.patch(`/api/case/${id}`, case_);
  return caseRes.data;
};

const createCase = async function createCase(case_) {
  const caseRes = await this.axiosInstance.post('/api/case', case_);
  return caseRes.data;
};

// const mergeCases = async function mergeAlertInCase(caseIdFrom, caseIdTo) {
//   const caseRes = await this.axiosInstance.post(
//     `/api/case/${caseIdFrom}/_merge/${caseIdTo}`,
//     {},
//   );
//   return caseRes.data;
// };

module.exports = {
  TheHiveMethods: {
    listCases,
    findCases,
    getCase,
    updateCase,
    createCase,
    getLinkedCases,
    deleteCase,
  },
};
