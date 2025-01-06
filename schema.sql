DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments (
  department_id SERIAL PRIMARY KEY,
  department_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(200) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments (department_id)
);

CREATE TABLE employees (
  employee_id SERIAL PRIMARY KEY,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  department_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NULL,
  FOREIGN KEY (department_id) REFERENCES departments (department_id),
  FOREIGN KEY (role_id) REFERENCES roles (role_id)
);



