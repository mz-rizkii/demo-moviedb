require('dotenv').config();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const dialect = 'mysql'

const db_config = { username, password, database, host, dialect };

module.exports = {
    db_config
};