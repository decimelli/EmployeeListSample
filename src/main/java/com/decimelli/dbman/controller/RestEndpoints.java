package com.decimelli.dbman.controller;

import com.decimelli.dbman.model.employee.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping
public class RestEndpoints {

    private EmployeeService employees;

    @Autowired
    public void setEmployees(EmployeeService employees) {
        this.employees = employees;
    }

    @RequestMapping(value = "/api/countries", method = GET, produces = "application/json")
    @ResponseBody
    public Set<String> getCountries() {
        return employees.getAllEmployeeCountries();
    }
}
