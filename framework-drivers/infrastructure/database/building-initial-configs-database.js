const buildingInitialDatabaseConfiguration = () => {
  require('./schemas/interface-schema')().globalGoalSchema().sync();
  require('./schemas/interface-schema')().sectorialGoalSchema().sync();
  require('./schemas/interface-schema')().individualGoalSchema().sync();
}

module.exports = buildingInitialDatabaseConfiguration;