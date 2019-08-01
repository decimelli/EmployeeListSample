package com.decimelli.dbman.boot;

import com.decimelli.dbman.model.employee.Employee;
import com.decimelli.dbman.model.employee.EmployeeService;
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
        saveEmployee("Stefan", "Decimelli", "Programmer", "Canada");
        saveEmployee("Alex", "Decimelli", "Brother", "Canada");
        saveEmployee("Elon", "Musk", "Engineer", "South Africa");
        saveEmployee("Albert", "Einstein", "Physicist", "Germany");
        saveEmployee("Nikola", "Tesla", "Inventor", "Croatia");
        saveEmployee("Isaac", "Newton", "Mathematician", "UK");
        saveEmployee("Galileo", "Galilei", "Astronomer", "Italy");
        saveEmployee("Leonardo", "da Vinci", "Renaissance Man", "Italy");
        saveEmployee("James", "Gosling", "Java Creator", "Canada");
        saveEmployee("Dennis", "Ritchie", "C Creator", "Canada");
    }

    private void saveEmployee(String fn, String ln, String job, String country) {
        employees.saveEmployee(new Employee(fn, ln, job, country));
    }
}
