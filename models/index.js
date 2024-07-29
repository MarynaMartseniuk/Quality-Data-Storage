const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
// const result = require('./result.js');



//connections for MachineAccess-Operator-Machine tables 
Operator.hasMany(Machine, {
    foreignKey: 'operator_id',
    onDelete: 'CASCADE',
});

Machine.belongsTo(Operator, {
  foreignKey: 'operator_id',
});


  module.exports = { Operator, Machine };

