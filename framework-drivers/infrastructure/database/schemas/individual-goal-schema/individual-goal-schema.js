const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/interface-configuration')().connectDatabase();

const IndividualGoalSchema = sequelize.define('MetaIndividual', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  nome_meta: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  alvo: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  maximo: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  minimo: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  resultado: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  colaborador_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fk_setor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  tableName: 'Meta_Individual'
});

module.exports = IndividualGoalSchema;