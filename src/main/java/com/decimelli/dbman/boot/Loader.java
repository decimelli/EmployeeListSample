package com.decimelli.dbman.boot;

import com.decimelli.dbman.model.Employee;
import com.decimelli.dbman.model.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Loader implements CommandLineRunner {

    private EmployeeService employees;

    @Autowired
    public void setEmployees(EmployeeService employees) {
        this.employees = employees;
    }

    @Override
    public void run(String... args) throws Exception {
        employees.saveEmployee(new Employee("Stefan", "Decimelli", "Programmer", "Canada"));
        employees.saveEmployee(new Employee("Elon", "Musk", "Engineer", "South Africa"));
        employees.saveEmployee(new Employee("Albert", "Einstein", "Physicist", "Germany"));
    }
}
