const { find } = require('./utils');

const findLogs = async function findLogs(attributes) {
  const { params, data } = find(attributes);
  const logsRes = await this.axiosInstance.post(
    '/api/case/task/log/_search',
    data,
    {
      params,
    },
  );
  return logsRes.data;
};

const getLog = async function getLog(id) {
  const logRes = await this.axiosInstance.get(`/api/case/task/log/${id}`);
  return logRes.data;
};

const deleteLog = async function deleteLog(id) {
  const logRes = await this.axiosInstance.delete(`/api/case/task/log/${id}`);
  return logRes.data;
};

const updateLog = async function updateLog(id, log) {
  const logRes = await this.axiosInstance.patch(
    `/api/case/task/log/${id}`,
    log,
  );
  return logRes.data;
};

const createLog = async function createLog(taskId, log) {
  const logRes = await this.axiosInstance.post(
    `/api/case/task/${taskId}/log`,
    log,
  );
  return logRes.data;
};

const findLogsInTask = async function findLogsInTask(taskId, attributes) {
  const { params, data } = find(attributes);
  const logsRes = await this.axiosInstance.post(
    `/api/case/task/${taskId}/log/_search`,
    data,
    {
      params,
    },
  );
  return logsRes.data;
};

const listLogsInTask = async function listLogsInTask(taskId) {
  const logsRes = await this.axiosInstance.get(`/api/case/task/${taskId}/log`);
  return logsRes.data;
};

module.exports = {
  TheHiveMethods: {
    findLogs,
    getLog,
    deleteLog,
    updateLog,
    createLog,
    findLogsInTask,
    listLogsInTask,
  },
};
