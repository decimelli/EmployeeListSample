package com.decimelli.dbman.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    private EmployeeRepository employees;

    @Autowired
    public void setEmployees(EmployeeRepository employees) {
        this.employees = employees;
    }

    public Employee getEmployee(String id) {
        return employees.findById(id).orElse(null);
    }

    public Employee saveEmployee(Employee employee) {
        return employees.save(employee);
    }

}
