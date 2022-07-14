const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/interface-configuration')().connectDatabase();

const SectorialGoalSchema = sequelize.define('MetaSetorial', {
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
    allowNull: false
  },
  maximo: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  minimo: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  resultado: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  fk_setor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  tableName: 'Meta_Setorial'
});

module.exports = SectorialGoalSchema;