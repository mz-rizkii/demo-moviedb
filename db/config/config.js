const { db_config } = require('../../lib/helper/config_helper');

module.exports = {
  "development": db_config,
  "test": db_config,
  "production": db_config
}
