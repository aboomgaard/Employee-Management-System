const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3000,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'RiKu?!1780!',
  database: 'company_DB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});
//would like to add individual categories such as department: add, find or search within department
const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'Add a department',
        'Find a department',
        'Add a role',
        'Find a role',
        'Add an employee',
        'Find an employee',
        'Update employee roles',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add a department':
          departmentAdd();
          break;

        case 'Find a department':
          departmentSearch();
          break;

        case 'Add a role':
          roleAdd();
          break;

        case 'Find a role':
          roleSearch();
          break;

        case 'Add an employee':
            employeeAdd();
            break;

        case 'Find an employee':
             employeeSearch();
             break;

        case 'Update employee roles':
          employeeroleUpdate();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const departmentAdd = () => {
  inquirer
    .prompt({
      name: 'department_name',
      type: 'department_type',
      message: 'Add a department',
    })
    .then(() => {
      const query = 'SELECT add_department FROM departments WHERE ?';
      connection.query(query, { add: departments }, (err, res) => {
        res.forEach(({ position, add_department }) => {
          console.log(
            `Position: ${position} || Add: ${add_department}`
          );
        });
        runSearch();
      });
    });
};

const departmentSearch = () => {
  const query =
    'SELECT departments FROM company_DB GROUP BY departments HAVING count(*) > 1';
  connection.query(query, (err, res) => {
    res.forEach(({ departments }) => console.log(departments));
    runSearch();
  });
};

const employeeroleUpdate
    prompt({
      name: 'employee_name',
      type: 'role',
      message: 'Select employee to update their role',
    })


