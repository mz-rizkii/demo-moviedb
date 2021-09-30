const { visitor_log, Sequelize: { Op } } = require('./models')

/**
 * Store visitor log to db
 * @param {object} log_data
 * @param {string} log_data.url visited url
 * @param {string} log_data.parameters query string in visitor request
 * @param {number} log_data.timestamp date time of access  
 * @returns 
 */
const storeVisitorLog = async ({ url, parameters, timestamp }) => visitor_log.create({
    RequestUrl: url, RequestParameters: parameters, RequestTimestamp: timestamp  
});

/**
 * get visitor log by url
 * @param {string} RequestUrl 
 * @param {string} parameter 
 * @returns visitor log record
 */
const findVisitorLog = async (RequestUrl, parameter) => visitor_log.findOne({ 
    where: { RequestUrl, RequestParameters: { [Op.like]: parameter } }
});

/**
 * remove visitor log by id
 * @param {number} url 
 * @returns boolean delete result
 */
const removeVisitorLog = async (id) => visitor_log.destroy({ where: { id }});

module.exports = {
    storeVisitorLog, findVisitorLog, removeVisitorLog
}