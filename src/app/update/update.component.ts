import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{


  id!: number;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(response =>{
      this.employee = response;
    }, error => console.log(error));
  
  }

  onSubmit(){
    return this.employeeService.updateEmployee(this.id,this.employee).subscribe( response=>{
      this.returnEmployeeList();
    },
    error => console.log(error));
  }

  returnEmployeeList(){
    this.router.navigate(['list']);
  }


}
