const express = require('express')

const router = require('./lib/router');

const { app_port } = require('./lib/helper/config_helper');

const app = express()

app.use('/', router)

app.listen(app_port, () => {
  console.log(`Example app listening at http://localhost:${app_port}`)
});

module.exports = app;