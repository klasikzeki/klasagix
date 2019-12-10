# TheHive4node
TheHive4node is a node API client for [TheHive](https://thehive-project.org/).

# Caution - WIP
TheHive4node is considered work in progress.

# How to install
On macOS and Linux, type:
```
yarn add thehive4node
```

# How tu use

```
const { TheHive4node, Alert } = require('thehive4node');

const thehive = new TheHive4node(
  process.env.THEHIVE_API_URL,
  process.env.THEHIVE_API_KEY,
);

(async () => {
  const alert = new Alert({
    title: 'My first alert',
    description: 'If not specified source is generated from "process.argv" and sourceRef is the hash of source concatenated with timestamp.',
    type: 'test',
  });
  const alertRes = await thehive.createAlert(alert.raw);
})();
```

# Functions

## Constructors

TheHive4node constructor accept apikey or login/password.

```
constructor(url, principal, password = null, options)
```

`options` is directly passed to create [axios](https://github.com/axios/axios) instance.


Alert constructor take an alert object.

```
constructor(alert)
```

If not specified it will populate `source` and `sourceRef` [required](https://github.com/TheHive-Project/TheHiveDocs/blob/master/api/alert.md) parameters.


## Methods

Following [TheHive API documentation](https://github.com/TheHive-Project/TheHiveDocs/blob/master/api/), TheHive4node methods are straightforward.

`grep -R function src/ |cut -d'=' -f 2 | grep -v setAlert | sort |cut -d' ' -f3-`

```
function createAlert(alert) {
function createCase(case_) {
function createLog(taskId, log) {
function createObservable(caseId, observable) {
function createTask(caseId, task) {
function deleteAlert(id) {
function deleteCase(id) {
function deleteLog(id) {
function deleteObservable(id) {
function deleteTask(id) {
function findAlerts(attributes) {
function findCases(attributes) {
function findLogs(attributes) {
function findLogsInTask(taskId, attributes) {
function findObservables(attributes) {
function findTasks(attributes) {
function findTasksInCase(caseId, attributes) {
function followAlert(id) {
function getAlert(id) {
function getCase(id) {
function getLinkedCases(id) {
function getLog(id) {
function getObservable(id) {
function getSimilarObservables(id) {
function getTask(id) {
function listAlerts() {
function listCases() {
function listLogsInTask(taskId) {
function markAlertAsRead(id) {
function markAlertAsUnread(id) {
function mergeAlertInCase(alertId, caseId) {
function mergeAlertInCase(caseIdFrom, caseIdTo) {
function mergeAlertInObservable(caseIdFrom, caseIdTo) {
function promoteAlertToCase(id, caseTemplate) {
function unfollowAlert(id) {
function updateAlert(id, alert) {
function updateCase(id, case_) {
function updateLog(id, log) {
function updateObservable(id, observable) {
function updateTask(id, task) {
```

