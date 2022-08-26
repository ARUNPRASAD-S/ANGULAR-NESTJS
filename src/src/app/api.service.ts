import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_SERVER="http://localhost:3000";
  constructor(private httpclient:HttpClient) { }
  public reademployees(){
    return this.httpclient.get<Employee[]>(`${this.API_SERVER}/employees`);
  }
  public createemployees(employees:Employee){
    return this.httpclient.post<Employee[]>(`${this.API_SERVER}/employees/create`,employees)
  }
  public updateemployees(employees:Employee) {
    return this.httpclient.put<Employee[]>(`${this.API_SERVER}/contacts/${employees.id}/update`,employees);
  }

  public deleteemployees(id: number) {
    return this.httpclient.delete(`${this.API_SERVER}/employees/${id}/delete`);
  }

}