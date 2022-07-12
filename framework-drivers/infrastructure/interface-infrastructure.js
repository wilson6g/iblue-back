const interfaceInfrastructure = () => ({
  databaseConnection:  () => ( require('./configuration/interface-configuration')()),
  initialDatabaseConfiguration:  () =>  ( require('./database/interface-database')()),
  databaseRepositories:  () =>  ( require('./repositories/interface-repositories')()),
});

module.exports = interfaceInfrastructure;