package com.decimelli.dbman.model.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

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

    public Set<String> getAllEmployeeCountries() {
        Set<String> countries = new HashSet<>();
        employees.findAll().forEach(e -> countries.add(e.getBirthCountry()));
        return countries;
    }
}
