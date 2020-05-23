import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Employee } from './employee-crud/employee.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl: string; 
  public response: object;

  constructor(private http: HttpClient) {
    
   }
}
