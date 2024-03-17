const Employee = require('./Employee');
const SalaryController = require('./SalaryController');

// data
const teo = new Employee(50);
const ti = new Employee(0);

// controller
const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo,ti]);

// view
console.log(totalSalary);

