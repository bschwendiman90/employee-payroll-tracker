// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray =[]
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
//   Creates a loop to allow continuous input of employees until user is done.
        do{

            const firstName = window.prompt("Please enter the employees first name: ")
            const lastName = window.prompt("Please enter the employees last name: ")
            let salary = window.prompt("Please enter the employees salary: ")
            // if the salary input is not a number it will automatically input 0.
            if(isNaN(salary)) {
                salary = 0;
            }

             const newEmployee = {
            firstName: firstName,
            lastName:lastName,
            salary:salary
            };

            employeesArray.push(newEmployee)

            const continueAdding = window.confirm("Do you want to add another employee?");
            
            if(!continueAdding) {
                break;
            }
        } while (true);
        

        return employeesArray;
  }


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    let totalSalary = 0;
    // Add the value of the salary key from all newEmployee objects togther
    for (i=0; i<employeesArray.length; i++) {
        totalSalary += employeesArray[i].salary;
    }
    const average = totalSalary / employeesArray.length
    
    
    return console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${average.toLocaleString("en-US", {style: "currency", currency: 'USD'})}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // choose a random number to use with the employeesArray to choose a winner
    const randomEmployee = Math.floor(Math.random()* employeesArray.length);
    const randomWinner = employeesArray[randomEmployee];

    return console.log (`Congratulations to ${randomWinner.firstName} ${randomWinner.lastName}, our random drawing winner!`)
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
