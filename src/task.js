const { find } = require('./utils');

const findTasks = async function findTasks(attributes) {
  const { params, data } = find(attributes);
  const tasksRes = await this.axiosInstance.post(
    '/api/case/task/_search',
    data,
    {
      params,
    },
  );
  return tasksRes.data;
};

const getTask = async function getTask(id) {
  const taskRes = await this.axiosInstance.get(`/api/case/task/${id}`);
  return taskRes.data;
};

const deleteTask = async function deleteTask(id) {
  const taskRes = await this.axiosInstance.delete(`/api/case/task/${id}`);
  return taskRes.data;
};

const updateTask = async function updateTask(id, task) {
  const taskRes = await this.axiosInstance.patch(`/api/case/task/${id}`, task);
  return taskRes.data;
};

const createTask = async function createTask(caseId, task) {
  const taskRes = await this.axiosInstance.post(
    `/api/case/${caseId}/task`,
    task,
  );
  return taskRes.data;
};

const findTasksInCase = async function findTasksInCase(caseId, attributes) {
  const { params, data } = find(attributes);
  const tasksRes = await this.axiosInstance.post(
    `/api/case/${caseId}/task/_search`,
    data,
    {
      params,
    },
  );
  return tasksRes.data;
};

module.exports = {
  TheHiveMethods: {
    findTasks,
    getTask,
    deleteTask,
    updateTask,
    createTask,
    findTasksInCase,
  },
};
