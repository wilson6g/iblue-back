const interfaceConfiguration = () => ({
  connectDatabase:  () => ( require('./connect-database')()),
});

module.exports = interfaceConfiguration;