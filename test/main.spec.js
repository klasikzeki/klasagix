require('dotenv').config({ path: './config/env' });
const chai = require('chai');
const { TheHive4node, Alert } = require('../index');

const thehive = new TheHive4node(
  process.env.THEHIVE_API_URL,
  process.env.THEHIVE_API_KEY,
);

chai.should();

let alertId;
const invalidAlertId = 'foo';

describe('TheHive4node', async () => {
  describe('alerts', async () => {
    // it('listAlerts returns an array', async () => {
    //   const alerts = await thehive.listAlerts();
    //   Array.isArray(alerts).should.equal(true);
    // });

    it('findAlerts without attributes returns an array', async () => {
      const alerts = await thehive.findAlerts();
      alertId = alerts[0].id;
      Array.isArray(alerts).should.equal(true);
    });

    it('getAlert with valid id return an alert', async () => {
      const alert = await thehive.getAlert(alertId);
      (
        typeof alert === 'object' && Array.isArray(alert) === false
      ).should.equal(true);
    });

    it('getAlert with invalid id throw alert not found', async () => {
      try {
        await thehive.getAlert(invalidAlertId);
      } catch (e) {
        e.response.data.message.should.equal(
          `alert ${invalidAlertId} not found`,
        );
      }
    });

    it('deleteAlert with valid id return true', async () => {
      const isDeleted = await thehive.deleteAlert(alertId);
      isDeleted.should.equal(true);
    });

    it('deleteAlert with invalid id throw alert not found', async () => {
      try {
        await thehive.deleteAlert(invalidAlertId);
      } catch (e) {
        e.response.data.message.should.equal(
          `alert ${invalidAlertId} not found`,
        );
      }
    });

    it('createAlert with minimum parameters create an alert', async () => {
      const alert = new Alert({
        title: 'test',
        description: 'a bigger text',
        type: 'test',
      });
      const alertRes = await thehive.createAlert(alert.raw);
      alertRes.title.should.equal(alert.raw.title);
    });

    it('createAlert with missing type throw AttributeCheckingError', async () => {
      const alert = new Alert({
        title: 'test',
        description: 'a bigger text',
      });
      try {
        await thehive.createAlert(alert.raw);
      } catch (e) {
        e.response.data.type.should.equal('AttributeCheckingError');
      }
    });
  });
});
