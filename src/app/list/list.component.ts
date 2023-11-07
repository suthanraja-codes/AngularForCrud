import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  employees!: Employee[];
  
  constructor(private employeeService:EmployeeService,
    private router:Router){}

  ngOnInit(): void {
    this.getEmployee();
    
  } 
  getEmployee() {
    this.employeeService.getEmployeeList().subscribe(response =>{
      this.employees = response;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['update',id]);

  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(response =>{
      console.log(response);
      this.getEmployee();
    })
  }
}
