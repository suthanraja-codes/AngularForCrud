import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  employee:Employee = new Employee;

  constructor(private employeeService:EmployeeService){};

  addEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(response => {
      console.log(response);
      response="";
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
    this.addEmployee();
    
  }

  ngOnInit(): void {
    
  }

}
