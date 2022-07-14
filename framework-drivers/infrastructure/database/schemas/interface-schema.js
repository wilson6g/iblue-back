const interfaceSchema = () => ({
  globalGoalSchema: () => (require('./global-goal-schema/global-goal-schema')),
  sectorialGoalSchema: () => (require('./sectorial-goal-schema/sectorial-goal-schema')),
  individualGoalSchema: () => (require('./individual-goal-schema/individual-goal-schema')),
});

module.exports = interfaceSchema;