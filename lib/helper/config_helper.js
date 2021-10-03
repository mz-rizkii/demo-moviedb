require('dotenv').config();

const app_port = process.env.PORT
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = 'mysql'

const db_config = { username, password, database, host, port, dialect };

module.exports = {
    db_config, app_port
};