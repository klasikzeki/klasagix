const crypto = require('crypto');
const { find } = require('./utils');

// const listAlerts = async function listAlerts() {
//   const alertsRes = await this.axiosInstance.get('/api/alert');
//   return alertsRes.data;
// };

const findAlerts = async function findAlerts(attributes) {
  const { params, data } = find(attributes);
  const alertsRes = await this.axiosInstance.post('/api/alert/_search', data, {
    params,
  });
  return alertsRes.data;
};

const getAlert = async function getAlert(id) {
  const alertRes = await this.axiosInstance.get(`/api/alert/${id}`);
  return alertRes.data;
};

const deleteAlert = async function deleteAlert(id) {
  const alertRes = await this.axiosInstance.delete(`/api/alert/${id}`);
  return alertRes.data === '';
};

const promoteAlertToCase = async function promoteAlertToCase(id, caseTemplate) {
  const data = {};
  if (typeof caseTemplate !== 'undefined') {
    data.caseTemplate = caseTemplate;
  }
  const caseRes = await this.axiosInstance.post(
    `/api/alert/${id}/createCase`,
    data,
  );
  return caseRes.data;
};

const updateAlert = async function updateAlert(id, alert) {
  const alertRes = await this.axiosInstance.patch(`/api/alert/${id}`, alert);
  return alertRes.data;
};

const setAlert = async function setAlert(id, as) {
  const alertRes = await this.axiosInstance.post(`/api/alert/${id}/${as}`, {});
  return alertRes.data;
};

const markAlertAsRead = async function markAlertAsRead(id) {
  return setAlert(id, 'markAsRead');
};

const markAlertAsUnread = async function markAlertAsUnread(id) {
  return setAlert(id, 'markAsUnread');
};

const followAlert = async function followAlert(id) {
  return setAlert(id, 'follow');
};

const unfollowAlert = async function unfollowAlert(id) {
  return setAlert(id, 'unfollow');
};

const createAlert = async function createAlert(alert) {
  const alertRes = await this.axiosInstance.post('/api/alert', alert);
  return alertRes.data;
};

const mergeAlertInCase = async function mergeAlertInCase(alertId, caseId) {
  const caseRes = await this.axiosInstance.post(
    `/api/alert/${alertId}/merge/${caseId}`,
    {},
  );
  return caseRes.data;
};

class Alert {
  constructor(alert) {
    this.raw = alert;
    if (typeof this.raw.severity === 'string') {
      switch (this.raw.severity) {
        case 'low':
          this.raw.severity = 1;
          break;
        case 'medium':
          this.raw.severity = 2;
          break;
        case 'high':
          this.raw.severity = 3;
          break;
        default:
          this.raw.severity = 2;
      }
    }

    if (typeof this.raw.source === 'undefined') {
      this.raw.source = process.argv.join(' ');
    }

    if (typeof this.raw.sourceRef === 'undefined') {
      const timestamp = new Date().getTime();
      const hash = crypto.createHash('sha1');
      hash.update(this.raw.source);

      this.raw.sourceRef = `${hash.digest('hex')}_${Math.floor(
        timestamp / 1000,
      )}`;
    }
  }
}

module.exports = {
  TheHiveMethods: {
    // listAlerts,
    findAlerts,
    getAlert,
    promoteAlertToCase,
    updateAlert,
    markAlertAsRead,
    markAlertAsUnread,
    createAlert,
    mergeAlertInCase,
    followAlert,
    unfollowAlert,
    deleteAlert,
  },
  Alert,
};
