const interfaceDatabase = () => ({
  buildingInitialDatabaseConfig: () => (require('./building-initial-configs-database')())
  // const sequelize = require('../../../configuration/interface-configuration')().connectDatabase();

})

module.exports = interfaceDatabase;