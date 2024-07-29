const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
// const Sample = require('./Sample.js');
// const result = require('./result.js');



//connections for MachineAccess-Operator-Machine tables 
Operator.hasMany(Machine, {
    foreignKey: 'employeeID',
    onDelete: 'CASCADE',
});

Machine.belongsTo(Operator, {
  foreignKey: 'employeeID',
});

// Machine.hasMany(Sample, {
//   foreignKey: 'machineName',
//   onDelete: 'CASCADE',
// });

// Sample.belongsTo(Machine, {
//   foreignKey: 'machineName',
// });

  module.exports = { Operator, Machine };

