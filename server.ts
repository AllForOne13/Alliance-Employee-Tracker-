import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
import inquirer from 'inquirer';

await connectToDb();


const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());






// Hardcoded query: DELETE FROM course_names WHERE id = 3;
pool.query(`DELETE FROM course_names WHERE id = $1`, [3], (err, result:QueryResult) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`${result.rowCount} row(s) deleted!`);
    }
});
// Query database
pool.query('SELECT * FROM course_names', (err, result:QueryResult) => {
    if (err) {
        console.log(err);
    }
    else if (result) {
        console.log(result.rows);
    }
});
// Default response for any other request (Not Found)
app.use((_req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// Function to prompt for department name
async function addDepartmentPrompt() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'Enter the name of the department:',
        },
    ]);

    // Add the department using the input
    const { department_name } = answers;
    try {
        await pool.query('INSERT INTO departments (department_name) VALUES ($1)', [department_name]);
        console.log('Department added successfully');
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

// Call the prompt function
addDepartmentPrompt();

// Add a role
app.post('/roles', async (req, res) => {
    const { role_name, salary, department_id } = req.body;
    try {
        await pool.query('INSERT INTO roles (role_name, salary, department_id) VALUES ($1, $2, $3)', [role_name, salary, department_id]);
        res.status(201).send('Role added successfully');
    } catch (error) {
        res.status(500).send('Error adding role');
    }
});

// Add an employee
app.post('/employees', async (req, res) => {
    const { first_name, last_name, department_id, role_id, manager_id } = req.body;
    try {
        await pool.query('INSERT INTO employees (first_name, last_name, department_id, role_id, manager_id) VALUES ($1, $2, $3, $4, $5)', [first_name, last_name, department_id, role_id, manager_id]);
        res.status(201).send('Employee added successfully');
    } catch (error) {
        res.status(500).send('Error adding employee');
    }
});

// Update employee role
app.put('/employees/:id/role', async (req, res) => {
    const employee_id = req.params.id;
    const { role_id } = req.body;
    try {
        await pool.query('UPDATE employees SET role_id = $1 WHERE employee_id = $2', [role_id, employee_id]);
        res.status(200).send('Employee role updated successfully');
    } catch (error) {
        res.status(500).send('Error updating employee role');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
