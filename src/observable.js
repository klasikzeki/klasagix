const { find } = require('./utils');

const findObservables = async function findObservables(attributes) {
  const { params, data } = find(attributes);
  const observablesRes = await this.axiosInstance.post(
    '/api/case/artifact/_search',
    data,
    {
      params,
    },
  );
  return observablesRes.data;
};

const getObservable = async function getObservable(id) {
  const observableRes = await this.axiosInstance.get(
    `/api/case/artifact/${id}`,
  );
  return observableRes.data;
};

const deleteObservable = async function deleteObservable(id) {
  const observableRes = await this.axiosInstance.delete(
    `/api/case/artifact/${id}`,
  );
  return observableRes.data;
};

const updateObservable = async function updateObservable(id, observable) {
  const observableRes = await this.axiosInstance.patch(
    `/api/case/artifact/${id}`,
    observable,
  );
  return observableRes.data;
};

const createObservable = async function createObservable(caseId, observable) {
  const observableRes = await this.axiosInstance.post(
    `/api/case/${caseId}/artifact`,
    observable,
  );
  return observableRes.data;
};

const getSimilarObservables = async function getSimilarObservables(id) {
  const observablesRes = await this.axiosInstance.get(
    `/api/case/artifact/${id}/similar`,
  );
  return observablesRes.data;
};

// const mergeObservables = async function mergeAlertInObservable(caseIdFrom, caseIdTo) {
//   const observableRes = await this.axiosInstance.post(
//     `/api/case/${caseIdFrom}/_merge/${caseIdTo}`,
//     {},
//   );
//   return observableRes.data;
// };

module.exports = {
  TheHiveMethods: {
    findObservables,
    getObservable,
    updateObservable,
    createObservable,
    deleteObservable,
    getSimilarObservables,
  },
};
