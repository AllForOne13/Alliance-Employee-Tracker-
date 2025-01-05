
SELECT 
e.employee_id, 
e.first_name, 
e.last_name, 
d.department_name, 
r.role_name, 
e.manager_id 
FROM
 employees e 
JOIN departments d ON e.department_id = d.department_id 
JOIN roles r ON e.role_id = r.role_id;