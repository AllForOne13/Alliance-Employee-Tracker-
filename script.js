// Get a reference to the #add-employees-btn element
const addEmployees = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
const firstName = prompt("Enter first name:");
const lastName = prompt("Enter last name:");
const salaryInput = prompt("Enter salary:");

const salary = isNaN(salaryInput) ? 0 : parseFloat(salaryInput);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });

    continueAdding = confirm("Do you want to keep adding another employee?");
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employees) {
  if (employees.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employees.length;

  console.log(`Number of Employees: ${employees.length}`);
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
};

// Select and display a random employee
const getRandomEmployee = function (employees) {
  if (employees.length === 0) {
    console.log("No employees available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: $${randomEmployee.salary}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
const currentEmployee = employeesArray[i];

const newTableRow = document.createElement('tr');

const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
 });

newTableRow.append(salaryCell);
employeeTable.append(newTableRow);
  }
};

// Main function to handle employee data tracking
const trackEmployeeData = function () {
  const employees = collectEmployees();
    console.table(employees);
    displayAverageSalary(employees);
    console.log('==============================');

getRandomEmployee(employees);
    employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
     }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployees.addEventListener('click', trackEmployeeData);
