import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-crud/employee.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  employee: Employee;
  public response: object;
  private baseUrl: string; 


  constructor(private http: HttpClient) { 
    this.employee = new Employee();
    this.baseUrl = "http://localhost:8080/employee";

    
  }
   ngOnInit() {
    this.http.get(this.baseUrl).subscribe((res)=>{
      console.log("response is " + res);
      this.response = res;    
  });
   }
   onClickSubmit(formData) {    
     console.log("success");
    this.employee.email = formData.email;
    this.employee.firstName = formData.first;
    this.employee.lastName = formData.last; 

    this.http.post(this.baseUrl,this.employee).subscribe((res)=>{
      console.log("response is " + res);
      this.response = res;
  });
   }



   deleteEmployee(employee){
    console.log("coming inside delete during onload " + employee.email);

    let httpParams = new HttpParams().set('email', employee.email).set('first', employee.firstName).set('last', employee.lastName);
   
    let options = { params: httpParams };


   this.http.delete(this.baseUrl, options).subscribe((res)=>{
     console.log("response is " + res);
     this.response = res;    
 });
  }
}
