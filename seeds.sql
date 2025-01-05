INSERT INTO departments (department_id, department_name)VALUES 
       (1, 'Human Resources'),
       (2, 'Finance'),
       (3, 'Marketing'),
       (4, 'Research and Development'),
       (5, 'Sales'),
       (6, 'IT'),
       (7, 'Computer Service'),
       (8, 'Operations');


INSERT INTO roles (role_id, role_name, salary, department_id)VALUES
       (1,'Software Engineer', 8500.00, 6),
       (2,'Project Manager', 9500.00, 2),
       (3,'Data Scientist', 105000.00, 3),
       (4,'HR Specialist', 70000.00, 4),
       (5,'Sales Manager', 90000.00, 5);

INSERT INTO employees (employee_id, first_name, last_name, department_id, role_id)VALUES 
   (1, 'Sam, Kash', 1, 1, 5), 
   (2, 'Austin, Baller', 2, 2, 1),
   (3, 'Jeff, Whines', 3, 3, 1), 
   (4, 'David, Parker', 4, 4, 2), 
   (5, 'Billy, Anderson', 5, 5, 2), 
   (6, 'Ryan, Jenson', 6, 1, 1), 
   (7, 'Phile, Harvey', 7, 2, 3), 
   (8, 'Bob, Shnider', 8, 4, 1);





