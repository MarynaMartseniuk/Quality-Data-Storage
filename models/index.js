const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
// const result = require('./result.js');



//connections for MachineAccess-Operator-Machine tables 
Operator.hasMany(Machine, {
    foreignKey: 'employeeID',
    onDelete: 'CASCADE',
});

Machine.belongsTo(Operator, {
  foreignKey: 'employeeID',
});


  module.exports = { Operator, Machine };

