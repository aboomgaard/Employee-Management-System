CREATE database company_DB;

USE company_DB;

CREATE TABLE departments (
  position INT NOT NULL,
  find_department VARCHAR(100) NULL,
  add_department VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE roles (
  position INT NOT NULL,
  categories VARCHAR(100) NULL,
  employee_role VARCHAR(100) NULL,
  update_role VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE employees (
  employess INT NOT NULL,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM departments;
select * from roles;
select * from employees;
